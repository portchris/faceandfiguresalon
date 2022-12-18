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
    static page;

    /** @var {String} */
    static contactDetails;

    /** @var {Object} */
    static contactAddress;

    /** @var {Object} */
    static contactLocation;

    /** @var {String} */
    static contactSuccessMessage;

    /** @var {String} */
    static mapsURL;

    /** @var {String} */
    static mapsMode;

    /** @var {String} */
    static mapsApiKey;

    constructor(props) {

        super(props);

        // Home
        this.page = props.page.data;
        this.logo = this.page.logo;
        this.title = this.page.page_title[0].text;
        this.content = this.page.content;
        this.contentTitle = this.page.heading_title[0].text;
        this.metaTitle = this.page.meta_title[0].text;
        this.metaDescription = this.page.meta_description[0].text;
        this.contactSuccessMessage = this.page.contact_success_msg[0].text;
        this.contactAddress = this.page.address;
        this.contactDetails = this.page.contact_details;
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

        // Address Line
        var address = this.logo.alt;
        for (let y in this.contactAddress) {

            let c = this.contactAddress[y];
            if (!c instanceof Object || c.type === null || c.text === null) {
                continue;
            }

            address = address + " " + c.text;
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
                    <h1 className="text-4xl my-5 py-5">{this.contentTitle}</h1>
                    <article id="contact-details" key="contact-details" className="flex border-b-slate-700">
                        <figure className="w-1/2 inline-block pr-2">
                            <Content content={this.content} />
                        </figure>
                        <figure className="w-1/2 inline-block pl-2">
                            <Content content={this.contactDetails} />
                            <figcaption className="bg-gray-100 p-4 drop-shadow-md relative mt-10 font-bold italic w-72">
                                <span className="rounded-full p-4 overflow-hidden block w-20 h-20 bg-white absolute bottom-3/4 left-3/4">
                                    <img
                                        className="bi x0 y0 w1 h1"
                                        width={100}
                                        height={100}
                                        alt="Face & Figure Beauty Salon Taunton Address Icon"
                                        src="data:image/png;base64,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"
                                    />
                                </span>
                                <Content content={this.contactAddress} />
                            </figcaption>
                        </figure>
                    </article>
                    <article id="contact-map" key="contact-map" className="grid grid-cols-2 grid-flow-col gap-2">
                        <ContactForm contactSuccessMessage={this.contactSuccessMessage} />
                        {this.mapsURL !== null && typeof this.contactLocation.latitude !== 'undefined' && typeof this.contactLocation.longitude !== 'undefined' &&
                            <iframe
                                className="event-map-frame drop-shadow-md pl-2"
                                width="100%"
                                height="400"
                                referrerPolicy="no-referrer-when-downgrade"
                                key={this.id + "-event-map-frame"}
                                src={
                                    this.mapsURL +
                                    this.mapsMode +
                                    String("?key=") +
                                    this.mapsApiKey +
                                    String("&q=") +
                                    String(encodeURIComponent(address)) +
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