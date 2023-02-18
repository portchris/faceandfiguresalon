import Content from './html/content';
import Link from 'next/link';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

class Treatment extends Component {

    /**
     * @var {Integer}
     */
    static id;

    /**
     * @var {String}
     */
    static divId;

    /**
     * @var {Object}
     */
    static image;

    /**
     * @var {Object}
     */
    static items;

    /**
     * @var {String}
     */
    static title;

    /**
     * @var {String}
     */
    static link;

    /**
     * @var {String}
     */
    static description;

    /**
     * @var {String}
     */
    static activeClass;

    /**
     * @param {Boolean}
     */
    static previewMode;

    constructor(props) {

        super(props);
        this.ref = React.createRef();
        this.id = props.id + "-" + this.makeUUID();
        this.divId = props.divId;
        this.name = props.name;
        this.image = props.image;
        this.link = props.link;
        this.items = props.items;
        this.description = props.description;
        this.siblings = props.siblings;
        this.activeClass = "active order-first col-span-full";
        this.previewMode = props.previewMode
            ? props.previewMode
            : typeof this.items !== 'undefined' && this.items.length;

        // State
        this.state = {
            ctaText: "View " + this.name,
            treatmentActiveClass: "",
            treatmentItemsActiveClass: "hidden"
        };
        this.setState(this.state);
        this.makeInactive = this.makeInactive.bind(this);

        if (window.location.hash.length) {
            this.featureTreatment(null);
        }
    }

    handleInputChange = (event) => {
        this.props.onActiveChange(event.target.value)
    }

    render() {

        const ITEMS = [];
        for (let i in this.items) {
            let item = this.items[i];

            if (
                !item
                || typeof item.cta === 'undefined'
                || typeof item.product_title === 'undefined'
                || typeof item.product_description === 'undefined'
            ) {
                continue;
            }

            let ctaText = (item.cta.length)
                ? item.cta[0].text
                : "";

            ITEMS.push(
                <li className="treatment-item bg-slate-50 border border-slate-100 my-2 rounded shadow relative flex items-center">
                    <div className="flex flex-col w-10/12 p-2">
                        <Content
                            key={"content-product-title-" + this.makeUUID()}
                            content={item.product_title}
                            type='heading4'
                        />
                        <Content
                            key={"content-product-description-" + this.makeUUID()}
                            content={item.product_description}
                        />
                    </div>
                    <div className="flex w-2/12 h-full cta">
                        <Link
                            key={"content-product-cta-" + this.makeUUID()}
                            title={ctaText}
                            href="/contact"
                        >
                            <a title={ctaText}>
                                <FontAwesomeIcon icon={faPhone} className="rounded-full text-ff p-2 inline xs w-12" />
                            </a>
                        </Link>
                    </div>
                </li>
            );
        }

        return (
            <React.Fragment>
                <Link
                    href={this.link.url}
                    key={this.id + "-treatment"}
                >
                    <a
                        id={this.divId}
                        key={this.id + "-treatment-anchor"}
                        onClick={e => this.featureTreatment(e)}
                        className={"relative pb-16 my-0 rounded shadow-lg border border-gray-200 shadow-gray-200 bg-white ease-in-out duration-300 hover:-translate-y-1 m-auto md:mx-0 max-w-md lg:max-w-full hover:cursor-pointer " + this.state.treatmentActiveClass}
                    >
                        <div key={this.id + "-treatment-row-1"}>
                            <img
                                src={this.image.url}
                                alt={this.image.alt}
                                width={this.image.dimensions.width}
                                className="m-auto"
                            />
                        </div>
                        <div key={this.id + "-treatment-row-2"}>
                            <h3 key={this.id + "-treatment-title"} className="text-2xl p-2">
                                {this.name}
                            </h3>
                        </div>
                        <div
                            key={this.id + "-treatment-row-3"}
                            className="px-2"
                        >
                            {typeof this.description !== "undefined" && this.description.length &&
                                <span key={this.id + "-treatment-text"}>
                                    <p>{this.description}</p>
                                </span>
                            }
                        </div>
                        <ul
                            key={this.id + "-treatment-row-4"}
                            className={this.state.treatmentItemsActiveClass + " px-2 my-2"}
                        >
                            {ITEMS}
                        </ul>
                        <div
                            key={this.id + "-treatment-row-5"}
                            className="px-2 absolute bottom-2 w-full"
                        >
                            <button className="w-full px-6 py-2.5 bg-orange-400 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">
                                {this.state.ctaText}
                            </button>
                        </div>
                    </a>
                </Link>
            </React.Fragment >
        );
    }

    makeInactive() {

        this.setState({
            treatmentItemsActiveClass: "",
            treatmentActiveClass: "",
            ctaText: ""
        });
    }

    /**
     * Handles the submit event on form submit.
     * @param {Object|null} event
     */
    featureTreatment(event) {

        const treatments = document.getElementById('treatments');
        const classes = this.activeClass.split(" ");
        const targetElement = (event !== null && event.target)
            ? event.target
            : window;

        if (this.previewMode && treatments) {
            if (event !== null) {
                event.preventDefault();
            }
            if (this.state.treatmentActiveClass.length === 0) {
                this.state.treatmentItemsActiveClass = "block";
                this.state.treatmentActiveClass = this.activeClass;
                this.state.ctaText = "Hide " + this.name;

                setTimeout(
                    () => targetElement.scrollTo({
                        top: 10,
                        left: 0,
                        behavior: 'smooth'
                    }),
                    250
                );
            } else {
                this.state.treatmentItemsActiveClass = "hidden";
                this.state.treatmentActiveClass = "";
                this.state.ctaText = "View " + this.name;
            }

            // this.siblings.forEach(
            //     (sibling) => sibling.type.prototype.makeInactive(sibling)
            // );

            // if (this.siblings.length) {
            //     for (let i in this.siblings) {
            //         let sibling = this.siblings[i];
            //         if (sibling) {
            //             sibling.state.treatmentActiveClass = "";
            //             sibling.setState(sibling.state);
            //         }
            //     }
            // }

            this.setState(this.state);
            window.location.hash = this.divId;
        }
    }

    /**
     * @param {Integer} length
     * @returns {String}
     */
    makeUUID(length = 5) {

        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }

        return result;
    }
}

export default Treatment;