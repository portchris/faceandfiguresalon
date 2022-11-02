import React, { Component } from 'react';
import Content from "./content";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Hero extends Component {

    /**
     * @var {String}
     */
    static uri;

    /**
     * @var {String}
     */
    static img;

    /**
     * @var {String}
     */
    static title;

    /**
    * @var {String}
    */
    static content;

    /**
     * @param {Object} props
     */
    constructor(props) {

        super(props);
        this.uri = props.uri;
        this.img = props.image;
        this.title = props.title;
        this.content = props.content;
    }

    render() {

        return (
            <React.Fragment>
                <div className="video-background">
                    <div className="video-foreground">
                        <iframe src={this.uri} frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
                <Container id="vidtop-content">
                    <Row key="hero-row">
                        <Col key="hero-col" lg="4">
                            {this.img && this.img.length > 0 &&
                                <img src={this.img} alt={this.title} class="logo" />
                            }
                            {this.title && this.title.length > 0 &&
                                <h2 className='h2'>{this.title}</h2>
                            }
                            {this.content && this.content.length > 0 &&
                                <Content content={this.content}></Content>
                            }
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Hero;