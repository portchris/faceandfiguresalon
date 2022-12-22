import * as Prismic from "@prismicio/client";
import React, { Component } from 'react';
import Treatment from "../components/treatment";
import HTMLHead from "../components/html/head";
import Header from "../components/html/header";
import Footer from "../components/html/footer";
import Content from "../components/html/content";
import FiveZeroThree from "../components/errors/503";

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
    this.metaTitle = this.index.meta_title[0].text;
    this.metaDescription = this.index.meta_description[0].text;

    // State
    this.state = {
      treatments: this.getSlicesByType(), // Treatments Slice
      sellingPoints: this.getSlicesByType('selling_points') // Selling Points Slice
    };
  }

  /**
   * Return dymanic page content meta by type
   * @param {String} type
   * @returns {Array}
   */
  getSlicesByType(type = "treatments") {

    const slices = [];
    if (typeof this.index === 'undefined' || typeof this.index.slices === 'undefined' || this.index.slices.length === 0) {
      return slices;
    }

    for (let i in this.index.slices) {
      let slice = this.index.slices[i];
      if (!slice.slice_type || slice.slice_type !== type) {
        continue;
      }

      slices.push(slice);
    }

    return slices;
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
        || typeof t.id === 'undefined'
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
          image={t.primary.image}
          name={t.primary.title[0].text}
          link={t.primary.link}
          descriptionLong={t.primary.description[0].text}
        />
      );
    }

    return (
      <React.Fragment>
        <HTMLHead
          title={this.metaTitle}
          description={this.metaDescription}>
        </HTMLHead>
        <Header
          title={this.title}
          logo={this.logo}
          loader="loader.gif"
          width={this.logo.dimensions.width / 3}
          height={this.logo.dimensions.height / 3}>
        </Header>
        <main className="content container mx-auto px-4">
          <article id="treatments" key="treatments" className="flex justify-evenly space-x-2 ml-12 mr-12">
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

  const page = await client.getByID('Y2KU_REAACEAKImf');

  return {
    props: {
      page: page
    }
  };
}