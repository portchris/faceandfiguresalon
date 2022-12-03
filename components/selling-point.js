import React, { Component } from 'react';

class SellingPoint extends Component {

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
    static description;

    constructor(props) {

        super(props);
        this.id = props.id + "-" + this.makeUUID();
        this.name = props.name;
        this.image = props.image;
        this.description = props.description;
    }

    render() {

        return (
            <React.Fragment>
                <div key={this.id + "-treatment"} className="w-72 bg-gray-100 p-4 drop-shadow-sm rounded-full text-center">
                    <p key={this.id + "-treatment-row-1"}>
                        <img
                            className='mx-auto'
                            src={this.image.url}
                            alt={this.image.alt}
                            width={this.image.dimensions.width / 4}
                        />
                    </p>
                    <p key={this.id + "-treatment-row-2"}>
                        <h3 key={this.id + "-treatment-title"} className="text-2xl py-2">
                            {this.name}
                        </h3>
                    </p>
                    <p key={this.id + "-treatment-row-3"}>
                        <span key={this.id + "-treatment-text"}>
                            <small>{this.description}</small>
                        </span>
                    </p>
                </div>
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

export default SellingPoint;