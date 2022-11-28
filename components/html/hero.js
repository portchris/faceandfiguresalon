import React, { Component } from 'react';
import Content from "./content";

class Hero extends Component {

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
        this.img = props.image;
        this.title = props.title;
        this.content = props.content;
    }

    render() {

        return (
            <React.Fragment>
                {/* <Container id="vidtop-content">
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
                </Container> */}
            </React.Fragment>
        );
    }
}

export default Hero;