import * as Prismic from "@prismicio/client";
import React, { Component } from 'react';
import Treatment from "../components/treatment";
import SellingPoint from "../components/selling-point";
import HTMLHead from "../components/html/head";
import Header from "../components/html/header";
import Footer from "../components/html/footer";
import Content from "../components/html/content";
import ContactForm from "../components/forms/contact-form";
import Hero from "../components/html/hero";
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
    const SELLING_POINTS = [];

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
          descriptionShort={t.primary.description[0].text}
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
          description={this.metaDescription}>
        </HTMLHead>
        <Header
          title={this.title}
          logo={this.logo}
          loader="loader.gif"
          width={this.logo.dimensions.width / 3}
          height={this.logo.dimensions.height / 3}>
        </Header>
        <Hero
          title={this.contentTitle}
          content={this.caption}>
        </Hero>
        <main className="content container-fluid mx-auto px-4">
          <article id="selling-points" key="selling-points" className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 my-10">
            {SELLING_POINTS}
          </article>
          <article id="treatments" key="treatments" className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TREATMENTS}
          </article>
          {/* <article id="home" key="index-article">
              <Row key="index-row">
                <Col key="index-col-1" className="description" md="8">
                  <Content
                    key="content-1"
                    content={content}>
                  </Content>
                </Col>
                <Col key="index-col-2" className="promo" md="4">
                  <div className="promo-video" key="promo-video">
                    <a
                      href={videoPromoURI}
                      target="_blank"
                      key="promo-video-link">
                      &nbsp;
                    </a>
                    <iframe
                      src={videoPromoURI}
                      frameBorder="0"
                      allowFullScreen
                      key="promo-video-frame">
                    </iframe>
                  </div>
                </Col>
              </Row>
            </article>
            <hr className="vspace" />
            <article id="events" key="events-article">
              <Row key="events-row-1">
                <h2 className="h2" key="heading2-1">{eventsTitle}</h2>
                <p>{eventsCaption}</p>
              </Row>
              <Row key="events-row-2">
                <Col key="events-col" md="12">
                  {eventsHtml}
                </Col>
              </Row>
            </article>
            <hr className="vspace" />
            <article id="contact" key="contact-article" className="vspace">
              <Row id="contact-heading" key="contact-row-1">
                <h2 className='h2' key="heading2-2">{contactContentTitle}</h2>
              </Row>
              <Row id="contact-row" key="contact-row-2">
                <Col id="contact-col-1" key="contact-col-1" md="12" className="description">
                  <Content
                    key="content-2"
                    content={contactCaption}>
                  </Content>
                  <Content
                    key="content-3"
                    content={contactContent}>
                  </Content>
                </Col>
              </Row>
              <Row id="contact" key="contact-row-3">
                <Col id="contact-col-4" key="contact-col-3" md="12">
                  <ContactForm contactSuccessMessage={contactSuccessMessage} />
                </Col>
              </Row>
            </article> */}
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