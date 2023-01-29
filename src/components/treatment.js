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
     * @param {Boolean}
     */
    static previewMode;

    constructor(props) {

        super(props);
        this.id = props.id + "-" + this.makeUUID();
        this.divId = props.divId;
        this.name = props.name;
        this.image = props.image;
        this.link = props.link;
        this.items = props.items;
        this.description = props.description;
        this.previewMode = props.previewMode
            ? props.previewMode
            : typeof this.items !== 'undefined' && this.items.length;
    }

    render() {

        const ctaText = this.previewMode
            ? "View " + this.name
            : "Learn More";

        return (
            <React.Fragment>
                <Link
                    href={this.link.url}
                    key={this.id + "-treatment"}
                >
                    <a
                        id={this.divId}
                        key={this.id + "-treatment-anchor"}
                        className="relative pb-16 my-0 rounded shadow-lg border border-gray-200 shadow-gray-200 bg-white duration-300 hover:-translate-y-1 m-auto md:mx-0 max-w-md lg:max-w-full hover:cursor-pointer"
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
                            <button
                                className="w-full px-6 py-2.5 bg-orange-400 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                                {ctaText}
                            </button>
                        </div>
                    </a>
                </Link>
            </React.Fragment >
        );
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