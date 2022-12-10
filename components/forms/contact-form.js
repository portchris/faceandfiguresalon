import React, { Component, useRef } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Notification from '../html/notification';

class ContactForm extends Component {

    /**
     * @var {String}
     */
    static captchaToken;

    /**
     * @var {String}
     */
    static captchaSecretKey;

    /**
     * @var {String}
     */
    static captchaSiteKey;

    /**
     * @var {String}
     */
    static wufooIdStamp;

    /**
     * @var {String}
     */
    static wufooUri;

    /**
     * @var {Array}
     */
    static notifications;

    /**
     * @var {String}
     */
    static contactSuccessMessage;

    /**
     * @param {Object} props
     */
    constructor(props) {

        super(props);
        this.captchaToken = null;
        this.contactSuccessMessage = props.contactSuccessMessage;
        this.captchaSecretKey = String(process.env.REACT_APP_RECAPTCHA_SECRETKEY);
        this.captchaSiteKey = String(process.env.REACT_APP_RECAPTCHA_SITEKEY)
        this.wufooIdStamp = String(process.env.REACT_APP_WUFOO_IDSTAMP);
        this.wufooUri = String(process.env.REACT_APP_WUFOO_URI);
        this.state = {
            notifications: []
        };
    }

    /**
     * @param {String} token
     */
    reCaptchaOnChange(token) {

        if (String(token).length) {
            this.captchaToken = token;
        }
    }

    /**
     * Handles the submit event on form submit.
     * @param {Object} event
     */
    handleFormSubmit(event, siteKey, token) {

        // Stop the form from submitting and refreshing the page.
        event.preventDefault();

        // reCAPTCHA token validation
        if (String(token).length === 0) {
            let m = "reCAPTCHA error: Invalid captcha token";
            console.error(m);
            return;
        }

        const form = new FormData(event.target);
        this.recaptchaVerfication(
            siteKey,
            token
        ).then(
            (response) => {
                if (response.status === 201 || response.status === 200) {
                    response
                        .json()
                        .then(
                            (res) => {
                                console.log(res);
                                if (res.success) {

                                    this.contactPost(
                                        form
                                    ).then(
                                        (r) => {
                                            console.log(r);
                                            this.contactSuccess();
                                        }
                                    ).catch(
                                        (error) => {

                                            if (error.message && error.message.indexOf("NetworkError when attempting to fetch resource") !== -1) {
                                                this.contactSuccess();
                                            } else {
                                                this.contactFailure(error.message);
                                            }

                                            return;
                                        }
                                    );
                                } else if (res['error-codes'] !== null) {
                                    for (let i in res['error-codes']) {
                                        let m = "reCAPTCHA error: " + String(res['error-codes'][i]);
                                        this.contactFailure(m);
                                    }

                                    return;
                                }
                            }
                        ).catch(
                            (error) => {
                                this.contactFailure(error.message);
                                return;
                            }
                        );
                }
            }
        ).catch(
            (error) => {
                this.contactFailure(error.message);
                return;
            }
        );
    }

    /**
     * @param {String} msg
     */
    contactSuccess(msg = "") {

        msg = (msg.length === 0)
            ? this.contactSuccessMessage
            : msg;

        this.state.notifications.push(
            <Notification
                show={true}
                key='contact-notification-success'
                content={msg}
                heading='Success'
                type='success'
            />
        )
        this.setState({
            notifications: this.state.notifications
        });
    }

    /**
     * @param {String} msg
     */
    contactFailure(msg = "") {

        msg = (msg.length === 0)
            ? this.contactSuccessMessage
            : msg;

        console.error(msg);
        this.state.notifications.push(
            <Notification
                show={true}
                key='contact-notification-error'
                content={msg}
                heading='Error'
                type='danger'
            />
        )
        this.setState({
            notifications: this.state.notifications
        });
    }

    /**
     * Contact Form reCAPTCHA Verification Router
     * @param {String} captchaToken
     * @returns {Promise}
     */
    recaptchaVerfication(captchaSiteKey, captchaToken) {

        // Google URI
        const googleUrl = '/captcha/siteverify/?secret=' + captchaSiteKey + '&response=' + captchaToken;

        return fetch(
            googleUrl,
            {
                method: 'GET',
                credentials: 'include',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

    /**
     * POST the Wufoo contact form server
     * @param {FormData} formData
     * @returns {Promise}
     */
    contactPost(formData) {

        const options = {
            method: 'POST',
            body: formData
        };

        return fetch(this.wufooUri, options);
    }

    render() {

        return (
            <React.Fragment>
                <form className="wufoo bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" encType="multipart/form-data" method="post" noValidate onSubmit={e => this.handleFormSubmit(e, this.captchaSecretKey, this.captchaToken)}>
                    <div key="field-0-row-notifications">
                        {this.state.notifications}
                    </div>
                    <div key="Field4-row" className="mb-4">
                        <label htmlFor="Field4">
                            Name<span >*</span>
                        </label>
                        <input
                            name="Field4"
                            id="Field4"
                            key="Field4-control"
                            type="text"
                            maxLength="255"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your full-name"
                        />
                    </div>
                    <div key="Field5-row">
                        <label htmlFor="Field5">
                            Email<span >*</span>
                        </label>
                        <input
                            name="Field5"
                            id="Field5"
                            key="Field5-control"
                            type="email"
                            spellCheck="false"
                            maxLength="255"
                            tabIndex="0"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Your e-mail address"
                            required
                        />

                    </div>
                    <div key="field-3-row">
                        <label htmlFor="Field7">
                            Phone<span>*</span>
                        </label>
                        <input
                            name="Field7"
                            id="Field7"
                            key="Field7-control"
                            type="text"
                            maxLength="255"
                            required
                            placeholder="Your phone number (optional)"
                        />
                    </div>
                    <div key="field-4-row">
                        <label htmlFor="Field7">
                            Message<span >*</span>
                        </label>
                        <input
                            type="textarea"
                            name="Field7"
                            placeholder="Your comment or message for the Cleverly Everly team"
                            required
                        />

                    </div>
                    <div key="field-5-row">
                        <ReCAPTCHA
                            sitekey={this.captchaSiteKey}
                            theme="dark"
                            onChange={t => this.reCaptchaOnChange(t)}
                        />

                    </div>
                    <div key="field-6-row">
                        <button variant="primary" type="submit" id="saveForm-control" key="saveForm-control" value="Send">
                            <span>Send</span>
                        </button>
                        <input
                            type="hidden"
                            className="hidden"
                            id="hidden-control-1"
                            key="hidden-control-1"
                            name="idstamp"
                            value={this.wufooIdStamp}
                        />
                        <input
                            type="hidden"
                            className="hidden"
                            id="hidden-control-2"
                            key="hidden-control-2"
                            name="encryptedPassword"
                        />

                    </div>
                </form>
            </React.Fragment>
        );
    }
};

export default ContactForm;