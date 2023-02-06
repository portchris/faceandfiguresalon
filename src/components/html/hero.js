import React, { Component } from 'react';
import Content from "./content";
import Link from 'next/link';

class Hero extends Component {

    /**
     * @var {String}
     */
    static img;

    /**
     * @var {String}
     */
    static cta;

    /**
     * @var {String}
     */
    static title;

    /**
     * @var {String}
     */
    static content;

    /**
     * @var {Component[]}
     */
    static children;

    /**
     * @param {Object} props
     */
    constructor(props) {

        super(props);
        this.cta = props.cta;
        this.img = props.image;
        this.title = props.title;
        this.content = props.content;
        this.children = props.children;
    }

    render() {

        return (
            <React.Fragment>
                <section id="hero" className="bg-gray-50 text-gray-800 p-2 flex align-middle mb-10 relative">
                    {this.img && this.img.length &&
                        <div className="badge self-start absolute inset-0 w-32">
                            <img
                                src={this.img}
                                alt="Celebrating 30 years"
                                className="w-32 -rotate-12"
                            />
                        </div>
                    }
                    <div className="container-fluid mx-auto text-center self-center">
                        {this.children}
                        {this.cta && this.cta.length &&
                            <Link href="/contact">
                                <a className="inline-block px-6 py-2.5 bg-orange-400 text-white font-medium  leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/contact" role="button">
                                    {this.cta}
                                </a>
                            </Link>
                        }
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Hero;