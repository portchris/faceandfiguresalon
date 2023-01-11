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
    static title;

    /**
     * @var {String}
     */
    static content;

    /**
     * @param {Object} props
     */
    constructor(props) {

        super(props);
        this.img = props.image;
        this.title = props.title;
        this.content = props.content;
    }

    render() {

        return (
            <React.Fragment>
                <section id="hero" className="bg-gray-50 text-gray-800 p-2 flex align-middle mb-10">
                    <div class="badge self-start rounded-b-full bg-slate-400">
                        <h1 className="font-bold mt-0 mb-6 text-white">Celebrating 30 Years</h1>
                        <i class="fa fa-mobile-phone bounce"></i>
                    </div>
                    <div className="container-fluid mx-auto text-center self-center">
                        <h1 className="text-4xl font-bold mt-0 mb-6">Celebrating 30 Years</h1>
                        <Link href="/contact">
                            <a className="font-bold inline-block px-6 py-2.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="/contact" role="button">
                                Contact Our Experienced Salon
                            </a>
                        </Link>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Hero;