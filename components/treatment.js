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
     * @var {Object}
     */
    static image;

    /**
     * @var {String}
     */
    static title;

    /**
     * @var {String}
     */
    static link;

    /**
     * @var {String}
     */
    static descriptionShort;

    /**
     * @var {String}
     */
    static descriptionLong;

    constructor(props) {

        super(props);
        this.id = props.id + "-" + this.makeUUID();
        this.name = props.name;
        this.image = props.image;
        this.link = props.link;
        this.descriptionLong = props.descriptionLong;
        this.descriptionShort = props.descriptionShort;
    }

    render() {

        return (
            <React.Fragment>
                <Card key={this.id + "-treatment"}>
                    <Card.Body key={this.id + "-treatment-body"}>
                        <Row key={this.id + "-treatment-row-1"}>
                        </Row>
                        <Row key={this.id + "-treatment-row-2"}>
                            <Col md="12" key={this.id + "-treatment-col-text-1"}>
                                <Card.Title key={this.id + "-treatment-title"}>
                                    {this.name}
                                </Card.Title>
                            </Col>
                        </Row>
                        <Row key={this.id + "-treatment-row-3"}>
                            <Col md="12" key={this.id + "-treatment-col-desc-3"}>
                                {this.descriptionShort !== null && this.descriptionShort.length &&
                                    <Card.Text key={this.id + "-treatment-text"}>
                                        {this.descriptionShort}
                                    </Card.Text>
                                }
                                {this.descriptionLong !== null && this.descriptionLong.length &&
                                    <Card.Text key={this.id + "-treatment-text"}>
                                        {this.descriptionLong}
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