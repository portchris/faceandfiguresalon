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

    /** @var {String} */
    static contactSuccessMessage;

    /** @var {Object} */
    static page;

    constructor(props) {

        super(props);

        // Home
        this.page = props.page.data;
        console.log(this.page);
        this.logo = this.page.logo;
        this.title = this.page.page_title[0].text;
        this.content = this.page.content;
        this.contentTitle = this.page.heading_title[0].text;
        this.metaTitle = this.page.meta_title[0].text;
        this.metaDescription = this.page.meta_description[0].text;
        this.contactSuccessMessage = this.page.contact_success_msg[0].text;
        this.contactAddress = this.page.address;
        this.contactLocation = this.page.map_location;
        this.mapsURL = String(process.env.REACT_APP_GOOGLE_MAPS_EMBED_URI);
        this.mapsMode = String(process.env.REACT_APP_GOOGLE_MAPS_MODE);
        this.mapsApiKey = String(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

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
        if (typeof this.page === 'undefined' || typeof this.page.slices === 'undefined' || this.page.slices.length === 0) {
            return slices;
        }

        for (let i in this.page.slices) {
            let slice = this.page.slices[i];
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

        if (typeof this.page === 'undefined') {
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
                    <article id="contact-details" key="contact-details" className="grid grid-cols-3 grid-flow-col gap-3">
                        <Content content={this.content} />
                    </article>
                    <article id="contact-form" key="contact-form" className="grid grid-cols-3 grid-flow-col gap-3">
                        <ContactForm contactSuccessMessage={this.contactSuccessMessage} />
                    </article>
                    <article id="contact-map">
                        <Content content={this.contactAddress} />
                        {this.mapsURL !== null && typeof this.contactLocation.latitude !== 'undefined' && typeof this.contactLocation.longitude !== 'undefined' &&
                            <iframe
                                className="event-map-frame grid grid-cols-3 grid-flow-col gap-3"
                                width="100%"
                                height="250"
                                frameBorder="0"
                                referrerPolicy="no-referrer-when-downgrade"
                                key={this.id + "-event-map-frame"}
                                src={
                                    this.mapsURL +
                                    this.mapsMode +
                                    String("?key=") +
                                    this.mapsApiKey +
                                    String("&q=") +
                                    String(encodeURIComponent(this.name)) +
                                    String("&center=") +
                                    String(this.contactLocation.latitude) +
                                    String(",") +
                                    String(this.contactLocation.longitude)
                                }>
                            </iframe>
                        }
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

    const page = await client.getByID('Y2eNpBEAAD9FPqgs');

    return {
        props: {
            page: page
        }
    };
}