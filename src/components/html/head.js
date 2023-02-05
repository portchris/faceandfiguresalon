import Head from 'next/head';
import React, { Component } from 'react';

class HTMLHead extends Component {

    /**
     * @param {Object} props
     */
    constructor(props) {

        super(props);

        // State
        this.state = {
            title: props.title,
            metaKeywords: props.metaKeywords,
            metaDescription: props.metaDescription
        };

        this.setState(this.state);
    }

    /**
     * @param {Object} props
     */
    componentWillReceiveProps(props) {

        if (props.title) {
            this.state.title = props.title;
        }

        if (props.metaKeywords) {
            this.state.metaKeywords = props.metaKeywords;
        }

        if (props.metaDescription) {
            this.state.metaDescription = props.metaDescription;
        }

        this.setState(this.state);
    }

    render() {

        return (
            <Head>
                <title>{this.state.title}</title>
                <meta name="keywords" content={this.state.metaKeywords} />
                <meta name="description" content={this.state.metaDescription} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.ico" />
            </Head >
        );
    }
}

export default HTMLHead;