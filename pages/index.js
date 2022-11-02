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

const repoName = "cleverlyeverly";
const endpoint = Prismic.getEndpoint(repoName);
const client = Prismic.createClient(endpoint);

/**
 * This function gets called at build time on server-side.
 * It won't be called on client-side, so you can even do direct database queries.
 * @param {*} context
 * @returns {Object}
 */
export async function getStaticProps({ context }) {

  var contact = null;
  var upcomingEvents = null;
  const page = await client.getSingle('homepage');
  const pages = await client.getAllByType('page');
  const events = await client.getAllByType('events');

  findPageByTag:
  for (let i in pages) {
    if (pages[i]['tags'] !== null && pages[i]['tags'].length) {
      for (let x in pages[i]['tags']) {
        switch (String(pages[i]['tags'][x]).toLowerCase()) {
          case "contact":
            contact = pages[i];
            break;
          case "events":
            upcomingEvents = pages[i];
            break;
        }

        if (upcomingEvents !== null && contact !== null) {
          break findPageByTag;
        }
      }
    }
  }

  return {
    props: {
      page,
      contact,
      upcomingEvents,
      events
    }
  };
}

export default function Home({ page, contact, upcomingEvents, events }) {

  if (!page || page.data === undefined) {
    return (
      <FiveZeroThree></FiveZeroThree>
    );
  }

  console.log(upcomingEvents);

  // Home
  const logo = page.data.logo;
  const title = page.data.title[0].text;
  const content = page.data.content;
  const contentTitle = page.data.content_title[0].text;
  const caption = page.data.caption;
  const metaTitle = page.data.meta_title[0].text;
  const metaDescription = page.data.meta_description[0].text;
  const videoPromoURI = page.data.video_promo.url;
  const videoBackgroundURI = page.data.video_background.url;

  // Contact
  const contactContent = contact.data.content;
  const contactCaption = contact.data.caption;
  const contactContentTitle = contact.data.content_title[0].text;
  const contactSuccessMessage = contact.data.notification_success_message[0].text;

  // Upcoming Events
  const eventsTitle = upcomingEvents.data.title[0].text;
  const eventsCaption = upcomingEvents.data.content_title[0].text;

  // Events
  const eventsHtml = [];
  for (let i in events) {

    let id = events[i].id;
    let data = events[i].data;
    let nm = data.event_name[0].text;
    let dt = new Date(data.event_date);
    let lnk = data.event_link.url;
    let desc = data.event_description[0].text;
    let loc = data.event_location;

    eventsHtml.push(
      <Event
        id={id}
        name={nm}
        date={dt}
        link={lnk}
        description={desc}
        location={loc}
      />
    );
  }

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
        uri={videoBackgroundURI}
        title={contentTitle}
        content={caption}>
      </Hero>
      <main className="content">
        <Container>
          <article id="home" key="index-article">
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
          </article>
          <Footer />
        </Container>
      </main>
    </React.Fragment>
  )
}
