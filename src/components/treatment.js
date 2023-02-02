import Link from 'next/link';
import React, { Component } from 'react';

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
            treatmentActiveClass: ""
        };
        this.setState(this.state);
        this.makeInactive = this.makeInactive.bind(this);
    }

    handleInputChange = (event) => {
        this.props.onActiveChange(event.target.value)
    }

    render() {

        return (
            <React.Fragment>
                <Link
                    href={this.link.url}
                    key={this.id + "-treatment"}
                >
                    <a
                        id={this.divId}
                        key={this.id + "-treatment-anchor"}
                        onClick={e => this.handleTreatmentClick(e)}
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
                        <div
                            key={this.id + "-treatment-row-4"}
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

    makeInactive(component) {

        console.log(this);

        this.state.treatmentActiveClass = "";
        this.state.ctaText = "View " + this.name;
        this.setState(this.state);
    }

    /**
     * Handles the submit event on form submit.
     * @param {Object} event
     */
    handleTreatmentClick(event) {

        const treatments = document.getElementById('treatments');
        const classes = this.activeClass.split(" ");
        if (this.previewMode && treatments) {
            event.preventDefault();
            if (this.state.treatmentActiveClass.length === 0) {
                this.state.treatmentActiveClass = this.activeClass;
                this.state.ctaText = "Hide " + this.name;
            } else {
                this.state.treatmentActiveClass = "";
                this.state.ctaText = "View " + this.name;
            }

            this.siblings.forEach(
                (sibling) => sibling.type.prototype.makeInactive(sibling)
            );

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
            event.target.scrollTo({
                top: 1,
                left: 0,
                behavior: 'smooth'
            });
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