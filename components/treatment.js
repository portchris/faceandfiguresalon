import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Treatment extends Component {

    /**
     * @var {Integer}
     */
    static id;

    /**
     * @var {String}
     */
    static name;

    /**
     * @var {Date}
     */
    static date;

    /**
     * @var {String}
     */
    static link;

    /**
     * @var {String}
     */
    static mapsURL;

    /**
     * @var {String}
     */
    static description;

    /**
     * @var {Object}
     */
    static location;


    constructor(props) {

        super(props);
        this.id = props.id + "-" + this.makeUUID();
        this.name = props.name;
        this.date = props.date;
        this.link = props.link;
        this.description = props.description;
        this.location = props.location;
        this.mapsURL = process.env.GOOGLE_MAPS_EMBED_URI + process.env.GOOGLE_MAPS_MODE + "?key=" + process.env.GOOGLE_MAPS_API_KEY;
    }

    render() {

        var map = null;
        if (typeof this.location.latitude !== 'undefined' && typeof this.location.longitude !== 'undefined') {
            map = this.mapsURL + "&center=" + this.location.latitude + "," + this.location.longitude;
        }

        return (
            <React.Fragment>
                <Card key={this.id + "-treatment"}>
                    <Card.Body key={this.id + "-treatment-body"}>
                        <Row key={this.id + "-treatment-row-1"}>
                            <Col xs="6" key={this.id + "-treatment-col-text-1"}>
                                <Card.Title key={this.id + "-treatment-title"}>
                                    {this.name}
                                </Card.Title>
                                <Card.Text key={this.id + "-treatment-text"}>
                                    {this.description}
                                </Card.Text>
                            </Col>
                            <Col xs="6" key={this.id + "-treatment-col-text-2"}>
                                {map !== null &&
                                    <Card.Text key={this.id + "-treatment-map"}>
                                        <iframe
                                            width="450"
                                            height="250"
                                            frameBorder="0"
                                            style={{ border: 0 }}
                                            referrerPolicy="no-referrer-when-downgrade"
                                            key={this.id + "-treatment-map-frame"}
                                            src={map}>
                                        </iframe>
                                    </Card.Text>
                                }
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </React.Fragment >
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

export default Treatment;