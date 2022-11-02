import React, { Component, useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

class Notification extends Component {

    /**
     * @var {String}
     */
    static key;

    /**
     * @var {String}
     */
    static type;

    /**
     * @var {String}
     */
    static heading;

    /**
    * @var {String}
    */
    static content;

    /**
     * @param {Object} props
     */
    constructor(props) {

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

        return (
            <React.Fragment>
                {this.state.show &&
                    <Alert variant={this.type} id={id} key={id} onClose={() => this.setState({ show: !this.state.show })} dismissible>
                        <Alert.Heading id={id + '-heading'} key={id + '-heading'}>{this.heading}</Alert.Heading>
                        <p id={id + '-content'} key={id + '-content'}>{this.content}</p>
                    </Alert>
                }
            </React.Fragment>
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

export default Notification;