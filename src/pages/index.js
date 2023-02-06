import * as Prismic from "@prismicio/client";
import React, { Component } from 'react';
import Treatment from "../components/treatment";
import SellingPoint from "../components/selling-point";
import HTMLHead from "../components/html/head";
import Header from "../components/html/header";
import Footer from "../components/html/footer";
import Content from "../components/html/content";
import Hero from "../components/html/hero";
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

  /** @var {String} */
  static metaTitle;

  /** @var {String} */
  static metaKeywords;

  /** @var {String} */
  static metaDescription;

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
    this.metaTitle = this.index.meta_title;
    this.metaKeywords = this.index.meta_keywords;
    this.metaDescription = this.index.meta_description;

    // State
    this.state = {
      treatments: [],
      sellingPoints: []
    };

    // Treatments
    this.getSlicesByType(
      "treatments",
      (treatments) => {
        this.state.treatments = treatments;
        this.setState(this.state);
      }
    );

    // Selling Points
    this.getSlicesByType(
      "selling_points",
      (sellingPoints) => {
        this.state.sellingPoints = sellingPoints;
        this.setState(this.state);
      }
    );
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

          console.log(slices);
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
   * @returns {React.Fragment}
   */
  render() {

    if (typeof this.index === 'undefined') {
      return (
        <FiveZeroThree></FiveZeroThree>
      );
    }

    const TREATMENTS = [];
    const SELLING_POINTS = [];

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
          siblings={null}
          previewMode={typeof t.primary.items !== 'undefined' && t.primary.items.length}
        />
      );
    }

    // Selling Points
    for (let x in this.state.sellingPoints) {
      let s = this.state.sellingPoints[x];

      if (
        typeof s.primary === 'undefined'
        || typeof s.id === 'undefined'
        || typeof s.primary.image === 'undefined'
        || typeof s.primary.title === 'undefined'
        || s.primary.title.length === 0
        || typeof s.primary.description === 'undefined'
        || s.primary.description.length === 0
      ) {
        continue;
      }

      SELLING_POINTS.push(
        <SellingPoint
          id={s.id}
          image={s.primary.image}
          name={s.primary.title[0].text}
          description={s.primary.description[0].text}
          iteration={x}
        />
      );
    }

    return (
      <React.Fragment>
        <HTMLHead
          title={this.metaTitle}
          metaKeywords={this.metaKeywords}
          metaDescription={this.metaDescription}
        />
        <Header
          title={this.title}
          logo={this.logo}
          loader="loader.gif"
          width={this.logo.dimensions.width / 3}
          height={this.logo.dimensions.height / 3}
        />
        <Hero
          cta="Contact our experienced salon"
          image="https://github.com/portchris/faceandfiguresalon/blob/master/src/img/taunton-beauty-salon-badge.png?raw=true"
        >
          <h1 className="text-4xl font-bold mt-0 mb-6">
            Our Taunton Beauty Salon<br />
            Celebrates 30 Years
          </h1>
        </Hero>
        <main className="content container-fluid mx-auto px-4">
          <article id="selling-points" key="selling-points" className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-10">
            {SELLING_POINTS}
          </article>
          <article id="treatments" key="treatments" className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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