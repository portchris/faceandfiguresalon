import * as Prismic from "@prismicio/client";
import React, { Component, useEffect } from 'react';
import Treatment from "../components/treatment";
import HTMLHead from "../components/html/head";
import Header from "../components/html/header";
import Footer from "../components/html/footer";
import Content from "../components/html/content";
import FiveZeroThree from "../components/errors/503";

const uuid = 'Y2KU_REAACEAKImf';
const repoName = "faceandfiguresalon";
const endpoint = Prismic.getEndpoint(repoName);
const client = Prismic.createClient(endpoint);

export default class Home extends Component {

  /** @var {String} */
  static logo;

  /** @var {String} */
  static title;

  /** @var {String} */
  static content;

  /** @var {String} */
  static contentTitle;

  /** @var {String} */
  static caption;

  /** @var {Object} */
  static index;

  constructor(props) {

    super(props);

    // Home
    this.index = props.page.data;
    this.logo = this.index.logo;
    this.title = this.index.page_title[0].text;
    this.content = this.index.content;
    this.contentTitle = this.index.heading_title[0].text;
    this.caption = this.index.caption;

    // State
    this.state = {
      treatments: [],
      sellingPoints: [],
      metaTitle: this.index.meta_title,
      metaKeywords: this.index.meta_keywords,
      metaDescription: this.index.meta_description
    };

    // Treatments
    this.getSlicesByType(
      "treatments",
      (treatments) => {
        this.state.treatments = treatments;
        this.setState(this.state);
      }
    );

    this.onUpdatePageMeta.bind(this);
  }

  /**
   * Return dymanic page content meta by type
   * @param {String} type
   * @param {Function} fnc
   */
  getSlicesByType(type, fnc) {

    const slices = [];
    client
      .getByID(uuid)
      .then(
        (p) => {
          if (typeof p === 'undefined' || typeof p.data.slices === 'undefined' || p.data.slices.length === 0) {
            return;
          }

          for (let i in p.data.slices) {
            let slice = p.data.slices[i];
            if (!slice.slice_type || slice.slice_type !== type) {
              continue;
            }

            slices.push(slice);
          }
        }
      )
      .catch(
        (e) => console.error(e)
      )
      .finally(
        () => fnc(slices)
      );
  }

  /**
   * On load
   */
  componentDidMount() {

    // Observers
    addEventListener(
      'hashchange',
      (event) => {

        if (event.oldURL !== event.newURL) {
          this.onUpdatePageMeta(event.newURL);
        }
      }
    );
  }

  /**
   * @param {String} uri
   */
  onUpdatePageMeta(uri) {

    let hash = uri.split('#');
    let divId = hash[(hash.length - 1)];
    let el = document.getElementById(divId);
    if (typeof el !== 'undefined') {
      let metaTitle = el.getElementsByTagName('h3');
      let metaDescription = el.getElementsByTagName('p');
      if (metaTitle.length) {
        this.state.metaTitle = "Face & Figure Salon Taunton | " + metaTitle[0].textContent;
      }
      if (metaDescription.length) {
        this.state.metaDescription = metaDescription[0].textContent;
      }

      this.setState(this.state);
    }
  }

  /**
   * @returns {React.Fragment}
   */
  render() {

    if (typeof this.index === 'undefined') {
      return (
        <FiveZeroThree></FiveZeroThree>
      );
    }

    const TREATMENTS = [];

    // Treatments
    for (let i in this.state.treatments) {
      let t = this.state.treatments[i];

      if (
        typeof t.primary === 'undefined'
        || t.primary.active === false
        || typeof t.id === 'undefined'
        || typeof t.primary.divId === 'undefined'
        || typeof t.primary.image === 'undefined'
        || typeof t.primary.title === 'undefined'
        || t.primary.title.length === 0
        || typeof t.primary.link === 'undefined'
        || typeof t.primary.description === 'undefined'
        || t.primary.description.length === 0
      ) {
        continue;
      }

      TREATMENTS.push(
        <Treatment
          id={t.id}
          divId={t.primary.divId}
          items={t.items}
          image={t.primary.image}
          name={t.primary.title[0].text}
          link={t.primary.link}
          description={t.primary.description[0].text}
          siblings={TREATMENTS}
          previewMode={typeof t.primary.items !== 'undefined' && t.primary.items.length}
        />
      );
    }

    return (
      <React.Fragment>
        <HTMLHead
          title={this.state.metaTitle}
          metaKeywords={this.state.metaKeywords}
          metaDescription={this.state.metaDescription}>
        </HTMLHead>
        <Header
          title={this.title}
          logo={this.logo}
          loader="loader.gif"
          width={this.logo.dimensions.width / 3}
          height={this.logo.dimensions.height / 3}>
        </Header>
        <main className="content container-fluid mx-auto px-4">
          <article id="treatments" key="treatments" className="grid gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TREATMENTS}
          </article>
          <Footer />
        </main>
      </React.Fragment>
    )
  }
}

/**
 * This function gets called at build time on server-side.
 * It won't be called on client-side, so you can even do direct database queries.
 * @param {*} context
 * @returns {Object}
 */
export async function getStaticProps({ context }) {

  const page = await client.getByID(uuid);

  return {
    props: {
      page: page
    }
  };
}