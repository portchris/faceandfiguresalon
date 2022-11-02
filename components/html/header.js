import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Header extends Component {

    /**
     * @var {String}
     */
    static logo;

    /**
     * @var {String}
     */
    static title;

    /**
     * @var {String}
     */
    static width;

    /**
     * @var {String}
     */
    static height;

    /**
     * @var {String}
     */
    static loader;

    constructor(props) {

        super(props);
        this.logo = String(props.logo);
        this.title = String(props.title);
        this.loader = String(props.loader);
        this.width = String(props.width);
        this.height = String(props.height);
    }

    render() {
        return (
            <header className='header'>
                <Navbar variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                className='logo'
                                src={this.logo}
                                alt={this.caption}
                                width={this.width}
                                height={this.height}
                            />
                            <h1 className="h1">
                                {this.title}
                            </h1>
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/#events">Events</Nav.Link>
                            <Nav.Link href="/#contact">Contact Us</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        );
    }

    imageLoader(src, width, quality) {

        return `https://github.com/portchris/cleverlyeverly/blob/main/public/${src}?raw=true&w=${width}&q=${quality || 75}`;
    }
}

export default Header;