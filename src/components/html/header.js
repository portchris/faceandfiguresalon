import React, { Component } from 'react';
import Link from 'next/link';

class Header extends Component {

    /**
     * @var {Object}
     */
    static logo;

    /**
     * @var {String}
     */
    static title;

    /**
     * @var {String}
     */
    static width;

    /**
     * @var {String}
     */
    static height;

    /**
     * @var {String}
     */
    static loader;

    constructor(props) {

        super(props);
        this.logo = props.logo;
        this.title = String(props.title);
        this.loader = String(props.loader);
        this.width = String(props.width);
        this.height = String(props.height);
        this.state = {
            activeClassAside: "collapse",
            activeClassBrand: "",
            activeClassBurgerMenu1: "",
            activeClassBurgerMenu2: "",
        };
    }

    render() {

        if (!this.logo || !this.title) {
            return (<React.Fragment></React.Fragment>);
        }

        return (
            <header className='header'>
                <nav className="navbar navbar-expand-lg shadow-md p-2 bg-white relative flex items-center w-full justify-between">
                    <div className="w-full flex flex-wrap items-center justify-between container-fluid mx-auto">
                        <div className={"navbar-logo items-left w-5/6 right-72 md:w-3/6 " + this.state.activeClassBrand} id="brand">
                            <ul className="navbar-nav mr-auto md:flex md:flex-row justify-start">
                                <li className='nav-item'>
                                    <a className="flex items-center text-white hover:text-gray-200 focus:text-gray-300 mt-2 md:mt-0 mr-1" href="/">
                                        <img
                                            width={this.logo.dimensions.width / 7}
                                            src={this.logo.url}
                                            alt={this.logo.alt}
                                            loading="lazy"
                                        />
                                        <h1 className="h1 text-xl sm:text-2xl text-white hover:text-gray-200 focus:text-gray-300">
                                            {this.title}
                                        </h1>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className={"navbar-collapse grow items-center w-3/6 md:visible " + this.state.activeClassAside} id="navbarSupportedContentY">
                            <ul className="navbar-nav mr-auto md:flex md:flex-row justify-end">
                                <li className="nav-item">
                                    <Link href="/" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <a className="nav-link block px-4 py-4 text-white hover:text-gray-200 focus:text-gray-300 transition duration-150 ease-in-out">Home</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/treatments" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <a className="nav-link block px-4 py-4 text-white hover:text-gray-200 focus:text-gray-300 transition duration-150 ease-in-out">Treatments</a>
                                    </Link>
                                </li>
                                <li className="nav-item mb-2 md:mb-0">
                                    <Link href="/contact" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <a className="nav-link block px-4 py-4 text-white hover:text-gray-200 focus:text-gray-300 transition duration-150 ease-in-out">Contact The Salon</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center md:collapse w-1/6 transition-transform ease-in-out">
                            <button
                                className="group flex h-20 w-20 cursor-pointer items-center justify-center p-2"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContentY"
                                aria-controls="navbarSupportedContentY"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                onClick={this.toggleMobileNavigation.bind(this)}>
                                <div class="space-y-2" id="burger-menu">
                                    <span class={"block h-1 w-10 origin-center rounded-full bg-white transition-transform ease-in-out " + this.state.activeClassBurgerMenu1}></span>
                                    <span class={"block h-1 w-10 origin-center rounded-full bg-white transition-transform ease-in-out " + this.state.activeClassBurgerMenu2}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

    toggleMobileNavigation(event) {

        this.state.activeClassAside = (this.state.activeClassAside.indexOf("collapse") === -1)
            ? "collapse"
            : "w-5/6 active visible";

        this.state.activeClassBrand = (this.state.activeClassAside.indexOf("collapse") === -1)
            ? "collapse"
            : "active";

        this.state.activeClassBurgerMenu1 = (this.state.activeClassBurgerMenu1.length)
            ? ""
            : "translate-y-1.5 rotate-45";

        this.state.activeClassBurgerMenu2 = (this.state.activeClassBurgerMenu2.length)
            ? ""
            : "-translate-y-1.5 -rotate-45";

        this.setState(this.state);
    }

    imageLoader(src, width, quality) {

        return `https://github.com/portchris/cleverlyeverly/blob/main/public/${src}?raw=true&w=${width}&q=${quality || 75}`;
    }
}

export default Header;