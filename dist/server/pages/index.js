"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(582);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_treatment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(128);
/* harmony import */ var _components_selling_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(674);
/* harmony import */ var _components_html_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(390);
/* harmony import */ var _components_html_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(171);
/* harmony import */ var _components_html_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(969);
/* harmony import */ var _components_html_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(586);
/* harmony import */ var _components_forms_contact_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(268);
/* harmony import */ var _components_html_hero__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(946);
/* harmony import */ var _components_errors_503__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(760);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_prismicio_client__WEBPACK_IMPORTED_MODULE_1__]);
_prismicio_client__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const repoName = "faceandfiguresalon";
const endpoint = _prismicio_client__WEBPACK_IMPORTED_MODULE_1__.getEndpoint(repoName);
const client = _prismicio_client__WEBPACK_IMPORTED_MODULE_1__.createClient(endpoint);
class Home extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
    /** @var {String} */ static logo;
    /** @var {String} */ static title;
    /** @var {String} */ static content;
    /** @var {String} */ static contentTitle;
    /** @var {String} */ static caption;
    /** @var {String} */ static metaTitle;
    /** @var {String} */ static metaDescription;
    /** @var {Object} */ static index;
    constructor(props){
        super(props);
        // Home
        this.index = props.page.data;
        this.logo = this.index.logo;
        this.title = this.index.page_title[0].text;
        this.content = this.index.content;
        this.contentTitle = this.index.heading_title[0].text;
        this.caption = this.index.caption;
        this.metaTitle = this.index.meta_title[0].text;
        this.metaDescription = this.index.meta_description[0].text;
        // State
        this.state = {
            treatments: this.getSlicesByType(),
            sellingPoints: this.getSlicesByType("selling_points") // Selling Points Slice
        };
    }
    /**
   * Return dymanic page content meta by type
   * @param {String} type
   * @returns {Array}
   */ getSlicesByType(type = "treatments") {
        const slices = [];
        if (typeof this.index === "undefined" || typeof this.index.slices === "undefined" || this.index.slices.length === 0) {
            return slices;
        }
        for(let i in this.index.slices){
            let slice = this.index.slices[i];
            if (!slice.slice_type || slice.slice_type !== type) {
                continue;
            }
            slices.push(slice);
        }
        return slices;
    }
    /**
   * @returns {React.Fragment}
   */ render() {
        if (typeof this.index === "undefined") {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_errors_503__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {});
        }
        const TREATMENTS = [];
        const SELLING_POINTS = [];
        // Treatments
        for(let i in this.state.treatments){
            let t = this.state.treatments[i];
            if (typeof t.primary === "undefined" || typeof t.id === "undefined" || typeof t.primary.image === "undefined" || typeof t.primary.title === "undefined" || t.primary.title.length === 0 || typeof t.primary.link === "undefined" || typeof t.primary.description === "undefined" || t.primary.description.length === 0) {
                continue;
            }
            TREATMENTS.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_treatment__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                id: t.id,
                image: t.primary.image,
                name: t.primary.title[0].text,
                link: t.primary.link,
                descriptionShort: t.primary.description[0].text
            }));
        }
        // Selling Points
        for(let x in this.state.sellingPoints){
            let s = this.state.sellingPoints[x];
            if (typeof s.primary === "undefined" || typeof s.id === "undefined" || typeof s.primary.image === "undefined" || typeof s.primary.title === "undefined" || s.primary.title.length === 0 || typeof s.primary.description === "undefined" || s.primary.description.length === 0) {
                continue;
            }
            SELLING_POINTS.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_selling_point__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                id: s.id,
                image: s.primary.image,
                name: s.primary.title[0].text,
                description: s.primary.description[0].text
            }));
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_html_head__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    title: this.metaTitle,
                    description: this.metaDescription
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_html_header__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    title: this.title,
                    logo: this.logo,
                    loader: "loader.gif",
                    width: this.logo.dimensions.width / 3,
                    height: this.logo.dimensions.height / 3
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_html_hero__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    title: this.contentTitle,
                    content: this.caption
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                    className: "content container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                            id: "selling-points",
                            className: "grid grid-cols-3 grid-flow-col gap-3",
                            children: SELLING_POINTS
                        }, "selling-points"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                            id: "treatments",
                            className: "grid grid-cols-4 grid-flow-col gap-4",
                            children: TREATMENTS
                        }, "treatments"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_html_footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                    ]
                })
            ]
        });
    }
};
/**
 * This function gets called at build time on server-side.
 * It won't be called on client-side, so you can even do direct database queries.
 * @param {*} context
 * @returns {Object}
 */ async function getStaticProps({ context  }) {
    const page = await client.getByID("Y2KU_REAACEAKImf");
    return {
        props: {
            page: page
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 623:
/***/ ((module) => {

module.exports = require("react-google-recaptcha");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 582:
/***/ ((module) => {

module.exports = import("@prismicio/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [969,581], () => (__webpack_exec__(369)));
module.exports = __webpack_exports__;

})();