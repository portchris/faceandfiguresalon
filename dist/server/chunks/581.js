"use strict";
exports.id = 581;
exports.ids = [581];
exports.modules = {

/***/ 268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ contact_form)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-google-recaptcha"
var external_react_google_recaptcha_ = __webpack_require__(623);
var external_react_google_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_react_google_recaptcha_);
;// CONCATENATED MODULE: ./components/html/notification.js


class Notification extends external_react_.Component {
    /**
     * @var {String}
     */ static key;
    /**
     * @var {String}
     */ static type;
    /**
     * @var {String}
     */ static heading;
    /**
    * @var {String}
    */ static content;
    /**
     * @param {Object} props
     */ constructor(props){
        super(props);
        this.key = props.key;
        this.type = props.type;
        this.heading = props.heading;
        this.content = props.content;
        this.state = {
            show: props.show ?? false
        };
    }
    render() {
        const id = "alert-" + this.key + "-" + this.makeUUID();
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {});
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
/* harmony default export */ const notification = (Notification);

;// CONCATENATED MODULE: ./components/forms/contact-form.js




class ContactForm extends external_react_.Component {
    /**
     * @var {String}
     */ static captchaToken;
    /**
     * @var {String}
     */ static captchaSecretKey;
    /**
     * @var {String}
     */ static captchaSiteKey;
    /**
     * @var {String}
     */ static wufooIdStamp;
    /**
     * @var {String}
     */ static wufooUri;
    /**
     * @var {Array}
     */ static notifications;
    /**
     * @var {String}
     */ static contactSuccessMessage;
    /**
     * @param {Object} props
     */ constructor(props){
        super(props);
        this.captchaToken = null;
        this.contactSuccessMessage = props.contactSuccessMessage;
        this.captchaSecretKey = String("6LfINBAUAAAAALLJErFf0l1FL_aVPmfOKl3qX7QP");
        this.captchaSiteKey = String("6LfINBAUAAAAAMD0hlHS6gfS5OGCSj8yrpBstoQz");
        this.wufooIdStamp = String("yJzscgYRROeiV03/BqduHQ==");
        this.wufooUri = String("https://portchris.wufoo.com/forms/m1ks8qpu02enbgh/");
        this.state = {
            notifications: []
        };
    }
    /**
     * @param {String} token
     */ reCaptchaOnChange(token) {
        if (String(token).length) {
            this.captchaToken = token;
        }
    }
    /**
     * Handles the submit event on form submit.
     * @param {Object} event
     */ handleFormSubmit(event, siteKey, token) {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();
        // reCAPTCHA token validation
        if (String(token).length === 0) {
            let m = "reCAPTCHA error: Invalid captcha token";
            console.error(m);
            return;
        }
        const form = new FormData(event.target);
        this.recaptchaVerfication(siteKey, token).then((response)=>{
            if (response.status === 201 || response.status === 200) {
                response.json().then((res)=>{
                    console.log(res);
                    if (res.success) {
                        this.contactPost(form).then((r)=>{
                            console.log(r);
                            this.contactSuccess();
                        }).catch((error)=>{
                            if (error.message && error.message.indexOf("NetworkError when attempting to fetch resource") !== -1) {
                                this.contactSuccess();
                            } else {
                                this.contactFailure(error.message);
                            }
                            return;
                        });
                    } else if (res["error-codes"] !== null) {
                        for(let i in res["error-codes"]){
                            let m = "reCAPTCHA error: " + String(res["error-codes"][i]);
                            this.contactFailure(m);
                        }
                        return;
                    }
                }).catch((error)=>{
                    this.contactFailure(error.message);
                    return;
                });
            }
        }).catch((error)=>{
            this.contactFailure(error.message);
            return;
        });
    }
    /**
     * @param {String} msg
     */ contactSuccess(msg = "") {
        msg = msg.length === 0 ? this.contactSuccessMessage : msg;
        this.state.notifications.push(/*#__PURE__*/ jsx_runtime_.jsx(notification, {
            show: true,
            content: msg,
            heading: "Success",
            type: "success"
        }, "contact-notification-success"));
        this.setState({
            notifications: this.state.notifications
        });
    }
    /**
     * @param {String} msg
     */ contactFailure(msg = "") {
        msg = msg.length === 0 ? this.contactSuccessMessage : msg;
        console.error(msg);
        this.state.notifications.push(/*#__PURE__*/ jsx_runtime_.jsx(notification, {
            show: true,
            content: msg,
            heading: "Error",
            type: "danger"
        }, "contact-notification-error"));
        this.setState({
            notifications: this.state.notifications
        });
    }
    /**
     * Contact Form reCAPTCHA Verification Router
     * @param {String} captchaToken
     * @returns {Promise}
     */ recaptchaVerfication(captchaSiteKey, captchaToken) {
        // Google URI
        const googleUrl = "/captcha/siteverify/?secret=" + captchaSiteKey + "&response=" + captchaToken;
        return fetch(googleUrl, {
            method: "GET",
            credentials: "include",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
    /**
     * POST the Wufoo contact form server
     * @param {FormData} formData
     * @returns {Promise}
     */ contactPost(formData) {
        const options = {
            method: "POST",
            body: formData
        };
        return fetch(this.wufooUri, options);
    }
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                className: "wufoo bg-white rounded pt-6 pb-8 mb-4 pr-2",
                encType: "multipart/form-data",
                method: "POST",
                noValidate: true,
                onSubmit: (e)=>this.handleFormSubmit(e, this.captchaSecretKey, this.captchaToken)
                ,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: this.state.notifications
                    }, "Field0-row-notifications"),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                htmlFor: "Field4",
                                children: [
                                    "Name",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                name: "Field4",
                                id: "Field4",
                                type: "text",
                                maxLength: "255",
                                required: true,
                                className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                placeholder: "Your full name so we know who you are"
                            }, "Field4-control")
                        ]
                    }, "Field4-row"),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                htmlFor: "Field5",
                                children: [
                                    "Email",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                name: "Field5",
                                id: "Field5",
                                type: "email",
                                spellCheck: "false",
                                maxLength: "255",
                                tabIndex: "0",
                                className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                placeholder: "Your e-mail address so that we may respond to you",
                                required: true
                            }, "Field5-control")
                        ]
                    }, "Field5-row"),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                htmlFor: "Field7",
                                children: [
                                    "Phone",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                name: "Field7",
                                id: "Field7",
                                type: "text",
                                maxLength: "255",
                                required: true,
                                className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                placeholder: "Your phone number if you wish us to call you (optional)"
                            }, "Field7-control")
                        ]
                    }, "Field7-row"),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                htmlFor: "Field3",
                                children: [
                                    "Message",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                rows: "5",
                                type: "textarea",
                                name: "Field3",
                                className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                placeholder: "Your comment or message to the Taunton salon",
                                required: true
                            })
                        ]
                    }, "Field3-row"),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_google_recaptcha_default()), {
                            sitekey: this.captchaSiteKey,
                            theme: "light",
                            onChange: (t)=>this.reCaptchaOnChange(t)
                        })
                    }, "field5-row"),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                variant: "primary",
                                type: "submit",
                                id: "saveForm-control",
                                className: "bg-orange-500 rounded-sm border-orange-700 hover:bg-orange-600 focus:bg-orange-600 text-white px-4 py-2 w-full",
                                value: "Send",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Send"
                                })
                            }, "saveForm-control"),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "hidden",
                                className: "hidden",
                                id: "hidden-control-1",
                                name: "idstamp",
                                value: this.wufooIdStamp
                            }, "hidden-control-1"),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "hidden",
                                className: "hidden",
                                id: "hidden-control-2",
                                name: "encryptedPassword"
                            }, "hidden-control-2")
                        ]
                    }, "Field6-row")
                ]
            })
        });
    }
}
;
/* harmony default export */ const contact_form = (ContactForm);


/***/ }),

/***/ 946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(586);



class Hero extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    /**
     * @var {String}
     */ static img;
    /**
     * @var {String}
     */ static title;
    /**
     * @var {String}
     */ static content;
    /**
     * @param {Object} props
     */ constructor(props){
        super(props);
        this.img = props.image;
        this.title = props.title;
        this.content = props.content;
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-center bg-gray-50 text-gray-800 py-20 px-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-5xl font-bold mt-0 mb-6",
                        children: "Heading"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-3xl font-bold mb-8",
                        children: "Subeading"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out",
                        "data-mdb-ripple": "true",
                        "data-mdb-ripple-color": "light",
                        href: "#!",
                        role: "button",
                        children: "Get started"
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class SellingPoint extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
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
     */ static description;
    constructor(props){
        super(props);
        this.id = props.id + "-" + this.makeUUID();
        this.name = props.name;
        this.image = props.image;
        this.description = props.description;
    }
    render() {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-72 bg-gray-100 p-4 drop-shadow-sm rounded-full text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "mx-auto",
                            src: this.image.url,
                            alt: this.image.alt,
                            width: this.image.dimensions.width / 4
                        })
                    }, this.id + "-treatment-row-1"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-2xl py-2",
                            children: this.name
                        }, this.id + "-treatment-title")
                    }, this.id + "-treatment-row-2"),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("small", {
                                children: this.description
                            })
                        }, this.id + "-treatment-text")
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellingPoint);


/***/ })

};
;