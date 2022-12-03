import React, { Component } from 'react';

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
            <header className='header h-40'>
                <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
                    <div className="px-6 w-full flex flex-wrap items-center justify-between">
                        <aside id="responsive-menu" className={"w-5/6 transition-transform ease-in-out md:collapse " + this.state.activeClassAside} aria-label="Sidebar">
                            <div className="px-3 py-4 overflow-y-auto">
                                <ul className="space-y-2">
                                    <li>
                                        <a href="/" target="_blank"
                                            className="flex items-center p-2 text-base font-normal text-gray-200 rounded-lg">
                                            <svg className="flex-shrink-0 w-6 h-6 text-gray-200 transition duration-75 group-hover:text-gray-200"
                                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                                </path>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/treatments"
                                            className="flex items-center p-2 text-base font-normal text-gray-200 rounded-lg">
                                            <svg className="flex-shrink-0 w-6 h-6 text-gray-200 transition duration-75 group-hover:text-gray-200"
                                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap">Treatments</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/contact" target="_blank"
                                            className="flex items-center p-2 text-base font-normal text-gray-200 rounded-lg">
                                            <svg className="flex-shrink-0 w-6 h-6 text-gray-200 transition duration-75 group-hover:text-gray-200"
                                                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z">
                                                </path>
                                                <path
                                                    d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z">
                                                </path>
                                            </svg>
                                            <span className="flex-1 ml-3 whitespace-nowrap">Contact The Salon</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
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
                        <div className="navbar-collapse grow items-center w-3/6 collapse md:visible" id="navbarSupportedContentY">
                            <ul className="navbar-nav mr-auto md:flex md:flex-row justify-end">
                                <li className="nav-item">
                                    <a className="nav-link block px-4 py-4 text-white hover:text-gray-200 focus:text-gray-300 transition duration-150 ease-in-out" href="/" data-mdb-ripple="true" data-mdb-ripple-color="light">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link block px-4 py-4 text-white hover:text-gray-200 focus:text-gray-300 transition duration-150 ease-in-out" href="/treatments" data-mdb-ripple="true" data-mdb-ripple-color="light">Treatments</a>
                                </li>
                                <li className="nav-item mb-2 md:mb-0">
                                    <a className="nav-link block px-4 py-4 text-white hover:text-gray-200 focus:text-gray-300 transition duration-150 ease-in-out" href="/contact" data-mdb-ripple="true" data-mdb-ripple-color="light">Contact The Salon</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }

    toggleMobileNavigation(event) {

        this.state.activeClassAside = (this.state.activeClassAside.indexOf("collapse") === -1)
            ? "collapse"
            : "w-5/6 active";

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