import * as Prismic from "@prismicio/client";
import React, { useState, Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Treatment from "../components/treatment";
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

  /** @var {String} */
  static videoPromoURI;

  /** @var {String} */
  static videoBackgroundURI;

  /** @var {String} */
  static contactContent;

  /** @var {String} */
  static contactCaption;

  /** @var {String} */
  static contactContentTitle;

  /** @var {String} */
  static contactSuccessMessage;

  /** @var {String} */
  static eventsTitle;

  /** @var {String} */
  static eventsCaption;

  /** @var {Object} */
  static index;

  /** @var {Object} */
  static events;

  /** @var {Object} */
  static contact;

  /** @var {Array} */
  static treatments;

  constructor(props) {

    super(props);


    // Home
    this.index = props.page;
    this.logo = this.index.data.logo;
    this.title = this.index.data.page_title[0].text;
    this.content = this.index.data.content;
    this.contentTitle = this.index.data.heading_title[0].text;
    this.caption = this.index.data.caption;
    this.metaTitle = this.index.data.meta_title[0].text;
    this.metaDescription = this.index.data.meta_description[0].text;

    // Treatments
    this.state = {
      treatments: []
    };
    this.getUpcomingTreatments();
  }

  /**
   * Retreive all upcoming events in realtime rather than `getStaticProps`
   * This being because events regularly change.
   * @returns {VoidFunction}
   */
  getUpcomingTreatments() {

    const now = new Date();
    const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;

    client
      .getAllByType('treatments')
      .then(
        (e) => {

          for (let i in e) {
            let id = e[i].id;
            let data = e[i].data;
            let nm = data.event_name[0].text;
            let dt = new Date(data.event_date);
            let lnk = data.event_link.url;
            let desc = data.event_description[0].text;
            let loc = data.event_location;
            let timeDiffInMs = now.getTime() - dt.getTime();

            // Only push new upcoming events, ignore those more than 30 days old
            if (timeDiffInMs <= thirtyDaysInMs) {
              this.state.treatments.push(
                <Treatment
                  id={id}
                  name={nm}
                  date={dt}
                  link={lnk}
                  description={desc}
                  location={loc}
                />
              );
            }

            this.setState(this.state);
          }
        }
      )
      .catch(
        (e) => {

          console.error(e);
          return eHtml;
        }
      )
      .finally(
        () => {
          console.log(this.state.treatments.length);
          if (this.state.treatments.length === 0) {
            this.state.treatments.push(
              <small>
                <i>{String("No treatments available at the moment...").toUpperCase()}</i>
              </small>
            );

            this.setState(this.state);
          }
        }
      );
  }

  /**
   * @returns {React.Fragment}
   */
  render() {

    if (!this.index || typeof this.index.data === 'undefined') {
      return (
        <FiveZeroThree></FiveZeroThree>
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
          logo={this.logo.url}
          loader="loader.gif"
          width={this.logo.dimensions.width / 2}
          height={this.logo.dimensions.height / 2}>
        </Header>
        <Hero
          title={this.contentTitle}
          content={this.caption}>
        </Hero>
        <main className="content">
          <Container>
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
          </Container>
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