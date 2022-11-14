import * as Prismic from "@prismicio/client";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Event from "../components/event";
import HTMLHead from "../components/html/head";
import Header from "../components/html/header";
import Footer from "../components/html/footer";
import Content from "../components/html/content";
import ContactForm from "../components/forms/contact-form";
import Hero from "../components/html/hero";
import FiveZeroThree from "../components/errors/503";

const repoName = process.env.PRISMIC_REPO_NAME;
const endpoint = Prismic.getEndpoint(repoName);
const client = Prismic.createClient(endpoint);

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

export default function Home({ page }) {

  console.log(page);
  if (!page || page.data === undefined) {
    return (
      <FiveZeroThree></FiveZeroThree>
    );
  }

  // Home
  const logo = page.data.logo;
  const title = page.data.page_title[0].text;
  const content = page.data.content;
  const contentTitle = page.data.heading_title[0].text;
  const caption = page.data.caption;
  const metaTitle = page.data.meta_title[0].text;
  const metaDescription = page.data.meta_description[0].text;

  console.log(page.data);

  return (
    <React.Fragment>
      <HTMLHead
        title={metaTitle}
        description={metaDescription}>
      </HTMLHead>
      <Header
        title={title}
        logo={logo.url}
        loader="loader.gif"
        width={logo.dimensions.width / 2}
        height={logo.dimensions.height / 2}>
      </Header>
      <Hero
        title={contentTitle}
        content={caption}>
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
