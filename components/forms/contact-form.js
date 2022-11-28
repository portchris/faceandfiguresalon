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
                {/* <Form className="wufoo" encType="multipart/form-data" method="post" noValidate onSubmit={e => this.handleFormSubmit(e, this.captchaSecretKey, this.captchaToken)}>
                    <Row key="field-0-row-notifications">
                        <Col md="12" key="field-0-col-notifications">
                            {this.state.notifications}
                        </Col>
                    </Row>
                    <Row key="field-1-row">
                        <Col md="12" key="field-1-col">
                            <Form.Group key="field-1" id="field-1">
                                <Form.Label htmlFor="Field1">
                                    Name<span >*</span>
                                </Form.Label>
                                <Form.Control
                                    name="Field1"
                                    id="Field1-control"
                                    key="Field1-control"
                                    type="text"
                                    maxLength="255"
                                    required
                                    placeholder="Your full-name"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row key="field-2-row">
                        <Col md="12" key="field-2-col">
                            <Form.Group key="field-2" id="field-2">
                                <Form.Label htmlFor="Field2">
                                    Email<span >*</span>
                                </Form.Label>
                                <Form.Control
                                    name="Field2"
                                    id="Field2-control"
                                    key="Field2-control"
                                    type="email"
                                    spellCheck="false"
                                    maxLength="255"
                                    tabIndex="0"
                                    placeholder="Your e-mail address"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row key="field-3-row">
                        <Col md="12" key="field-3-col">
                            <Form.Group key="field-3" id="field-3">
                                <Form.Label htmlFor="Field3">
                                    Subject<span>*</span>
                                </Form.Label>
                                <Form.Control
                                    name="Field3"
                                    id="Field3-control"
                                    key="Field3-control"
                                    type="text"
                                    maxLength="255"
                                    required
                                    placeholder="The subject matter"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row key="field-4-row">
                        <Col md="12" key="field-4-col">
                            <Form.Group key="field-4" id="field-4">
                                <Form.Label htmlFor="Field4">
                                    Message<span >*</span>
                                </Form.Label>
                                <Form.Control
                                    type="textarea"
                                    name="Field4"
                                    placeholder="Your comment or message for the Cleverly Everly team"
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row key="field-5-row">
                        <Col md="12" key="field-5-col">
                            <Form.Group className="mb-12 vspace" key="field-5" id="field-5">
                                <ReCAPTCHA
                                    sitekey={this.captchaSiteKey}
                                    theme="dark"
                                    onChange={t => this.reCaptchaOnChange(t)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row key="field-6-row">
                        <Col md="12" key="field-6-col">
                            <Form.Group key="field-6" id="field-6">
                                <Button variant="primary" type="submit" id="saveForm-control" key="saveForm-control" value="Send">
                                    <span>Send</span>
                                </Button>
                                <Form.Control
                                    type="hidden"
                                    className="hidden"
                                    id="hidden-control-1"
                                    key="hidden-control-1"
                                    name="idstamp"
                                    value={this.wufooIdStamp}
                                />
                                <Form.Control
                                    type="hidden"
                                    className="hidden"
                                    id="hidden-control-2"
                                    key="hidden-control-2"
                                    name="encryptedPassword"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form> */}
            </React.Fragment>
        );
    }
};

export default ContactForm;