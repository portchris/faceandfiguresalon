"use strict";
exports.id = 969;
exports.ids = [969];
exports.modules = {

/***/ 760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FiveZeroThree)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function FiveZeroThree({ Comment , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        children: "503 Service Unavailable"
    });
};


/***/ }),

/***/ 586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const PRISMIC_MARKUP_PARAGRAPH = "paragraph";
const PRISMIC_MARKUP_HEADING1 = "heading1";
const PRISMIC_MARKUP_HEADING2 = "heading2";
const PRISMIC_MARKUP_HEADING3 = "heading3";
const PRISMIC_MARKUP_HEADING4 = "heading4";
const PRISMIC_MARKUP_IMAGE = "image";
class Content extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    static content;
    constructor(props){
        super(props);
        this.content = props.content;
    }
    render() {
        let render = [];
        for(let i in this.content){
            let c = this.content[i];
            if (!c instanceof Object || c.type === null || c.text === null) {
                continue;
            }
            switch(c.type){
                case PRISMIC_MARKUP_PARAGRAPH:
                    render.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-4 content-paragraph-" + i,
                        children: c.text
                    }, "content-paragraph-" + i));
                    break;
                case PRISMIC_MARKUP_HEADING1:
                    render.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-4xl content-heading-" + i,
                        children: c.text
                    }, "content-heading-" + i));
                    break;
                case PRISMIC_MARKUP_HEADING2:
                    render.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-3xl content-heading-" + i,
                        children: c.text
                    }, "content-heading-" + i));
                    break;
                case PRISMIC_MARKUP_HEADING3:
                    render.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-2xl content-heading-" + i,
                        children: c.text
                    }, "content-heading-" + i));
                    break;
                case PRISMIC_MARKUP_HEADING4:
                    render.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        className: "font-bold content-heading-" + i,
                        children: c.text
                    }, "content-heading-" + i));
                    break;
                case PRISMIC_MARKUP_IMAGE:
                    render.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "content-image-" + i,
                        src: c.url,
                        alt: c.alt,
                        width: c.dimensions.width * 0.90,
                        height: "auto"
                    }, "content-image-" + i));
                    break;
                default:
                    render.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "mb-4 content-span-" + i,
                        children: c.text
                    }, "content-span-" + i));
                    break;
            }
        }
        return render;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);


/***/ }),

/***/ 969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Footer extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
            className: "footer vspace",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        "Developed by ",
                        " "
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "https://www.portchris.co.uk/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "ROG-WEB GLOBAL ltd"
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ HTMLHead)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


function HTMLHead(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: props.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossOrigin: "true"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                href: "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap",
                rel: "stylesheet"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "icon",
                href: "/favicon.ico"
            })
        ]
    });
};


/***/ }),

/***/ 171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Header extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    /**
     * @var {Object}
     */ static logo;
    /**
     * @var {String}
     */ static title;
    /**
     * @var {String}
     */ static width;
    /**
     * @var {String}
     */ static height;
    /**
     * @var {String}
     */ static loader;
    constructor(props){
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
            activeClassBurgerMenu2: ""
        };
    }
    render() {
        if (!this.logo || !this.title) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {});
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
            className: "header",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full flex flex-wrap items-center justify-between container mx-auto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("aside", {
                            id: "responsive-menu",
                            className: "w-5/6 transition-transform ease-in-out md:collapse " + this.state.activeClassAside,
                            "aria-label": "Sidebar",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-3 py-4 overflow-y-auto",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "/",
                                                target: "_blank",
                                                className: "flex items-center p-2 text-base font-normal text-gray-200 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        className: "flex-shrink-0 w-6 h-6 text-gray-200 transition duration-75 group-hover:text-gray-200",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 20 20",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "flex-1 ml-3 whitespace-nowrap",
                                                        children: "Home"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "/treatments",
                                                className: "flex items-center p-2 text-base font-normal text-gray-200 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        className: "flex-shrink-0 w-6 h-6 text-gray-200 transition duration-75 group-hover:text-gray-200",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 20 20",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            fillRule: "evenodd",
                                                            d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                                                            clipRule: "evenodd"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "flex-1 ml-3 whitespace-nowrap",
                                                        children: "Treatments"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "/contact",
                                                target: "_blank",
                                                className: "flex items-center p-2 text-base font-normal text-gray-200 rounded-lg",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        className: "flex-shrink-0 w-6 h-6 text-gray-200 transition duration-75 group-hover:text-gray-200",
                                                        fill: "currentColor",
                                                        viewBox: "0 0 20 20",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "flex-1 ml-3 whitespace-nowrap",
                                                        children: "Contact The Salon"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "navbar-logo items-left w-5/6 right-72 md:w-3/6 " + this.state.activeClassBrand,
                            id: "brand",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "navbar-nav mr-auto md:flex md:flex-row justify-start",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        className: "flex items-center text-white hover:text-gray-200 focus:text-gray-300 mt-2 md:mt-0 mr-1",
                                        href: "/",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                width: this.logo.dimensions.width / 7,
                                                src: this.logo.url,
                                                alt: this.logo.alt,
                                                loading: "lazy"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "h1 text-xl sm:text-2xl text-white hover:text-gray-200 focus:text-gray-300",
                                                children: this.title
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center md:collapse w-1/6 transition-transform ease-in-out",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "group flex h-20 w-20 cursor-pointer items-center justify-center p-2",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#navbarSupportedContentY",
                                "aria-controls": "navbarSupportedContentY",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                onClick: this.toggleMobileNavigation.bind(this),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    class: "space-y-2",
                                    id: "burger-menu",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            class: "block h-1 w-10 origin-center rounded-full bg-white transition-transform ease-in-out " + this.state.activeClassBurgerMenu1
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            class: "block h-1 w-10 origin-center rounded-full bg-white transition-transform ease-in-out " + this.state.activeClassBurgerMenu2
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "navbar-collapse grow items-center w-3/6 collapse md:visible",
                            id: "navbarSupportedContentY",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "navbar-nav mr-auto md:flex md:flex-row justify-end",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "nav-link block px-4 py-4 text-white hover:text-gray-200 focus:text-gray-300 transition duration-150 ease-in-out",
                                            href: "/",
                                            "data-mdb-ripple": "true",
                                            "data-mdb-ripple-color": "light",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "nav-item",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "nav-link block px-4 py-4 text-white hover:text-gray-200 focus:text-gray-300 transition duration-150 ease-in-out",
                                            href: "/treatments",
                                            "data-mdb-ripple": "true",
                                            "data-mdb-ripple-color": "light",
                                            children: "Treatments"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        className: "nav-item mb-2 md:mb-0",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "nav-link block px-4 py-4 text-white hover:text-gray-200 focus:text-gray-300 transition duration-150 ease-in-out",
                                            href: "/contact",
                                            "data-mdb-ripple": "true",
                                            "data-mdb-ripple-color": "light",
                                            children: "Contact The Salon"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        });
    }
    toggleMobileNavigation(event) {
        this.state.activeClassAside = this.state.activeClassAside.indexOf("collapse") === -1 ? "collapse" : "w-5/6 active";
        this.state.activeClassBrand = this.state.activeClassAside.indexOf("collapse") === -1 ? "collapse" : "active";
        this.state.activeClassBurgerMenu1 = this.state.activeClassBurgerMenu1.length ? "" : "translate-y-1.5 rotate-45";
        this.state.activeClassBurgerMenu2 = this.state.activeClassBurgerMenu2.length ? "" : "-translate-y-1.5 -rotate-45";
        this.setState(this.state);
    }
    imageLoader(src, width, quality) {
        return `https://github.com/portchris/cleverlyeverly/blob/main/public/${src}?raw=true&w=${width}&q=${quality || 75}`;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 128:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Treatment extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    /**
     * @var {Integer}
     */ static id;
    /**
     * @var {Object}
     */ static image;
    /**
     * @var {String}
     */ static title;
    /**
     * @var {String}
     */ static link;
    /**
     * @var {String}
     */ static descriptionShort;
    /**
     * @var {String}
     */ static descriptionLong;
    /**
     * @param {Boolean}
     */ static previewMode;
    constructor(props){
        super(props);
        this.id = props.id + "-" + this.makeUUID();
        this.name = props.name;
        this.image = props.image;
        this.link = props.link;
        this.descriptionLong = props.descriptionLong;
        this.descriptionShort = props.descriptionShort;
        this.previewMode = typeof this.descriptionShort !== "undefined" && this.descriptionShort.length && typeof this.descriptionLong === "undefined";
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "drop-shadow-md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: this.image.url,
                            alt: this.image.alt,
                            width: this.image.dimensions.width
                        })
                    }, this.id + "-treatment-row-1"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-2xl py-2",
                            children: this.name
                        }, this.id + "-treatment-title")
                    }, this.id + "-treatment-row-2"),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            typeof this.descriptionShort !== "undefined" && this.descriptionShort.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                    children: this.descriptionShort
                                })
                            }, this.id + "-treatment-text"),
                            typeof this.descriptionLong !== "undefined" && this.descriptionLong.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: this.descriptionLong
                                })
                            }, this.id + "-treatment-text")
                        ]
                    }, this.id + "-treatment-row-3")
                ]
            }, this.id + "-treatment")
        });
    }
    /**
     * @param {Integer} length
     * @returns {String}
     */ makeUUID(length = 5) {
        var result = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for(var i = 0; i < length; i++){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Treatment);


/***/ })

};
;