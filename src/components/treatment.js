import React, { Component } from 'react';

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

    /**
     * @param {Boolean}
     */
    static previewMode;

    constructor(props) {

        super(props);
        this.id = props.id + "-" + this.makeUUID();
        this.name = props.name;
        this.image = props.image;
        this.link = props.link;
        this.descriptionLong = props.descriptionLong;
        this.descriptionShort = props.descriptionShort;
        this.previewMode = typeof this.descriptionShort !== "undefined"
            && this.descriptionShort.length
            && typeof this.descriptionLong === "undefined";
    }

    render() {

        return (
            <React.Fragment>
                <div key={this.id + "-treatment"} className="max-w-md pb-2 my-0 rounded shadow-lg border border-gray-200 shadow-gray-200 bg-white duration-300 hover:-translate-y-1 m-auto md:mx-0 hover:cursor-pointer">
                    <div key={this.id + "-treatment-row-1"}>
                        <img
                            src={this.image.url}
                            alt={this.image.alt}
                            width={this.image.dimensions.width}
                            className="m-auto"
                        />
                    </div>
                    <div key={this.id + "-treatment-row-2"}>
                        <h3 key={this.id + "-treatment-title"} className="text-2xl p-2">
                            {this.name}
                        </h3>
                    </div>
                    <div key={this.id + "-treatment-row-3"} className="px-2">
                        {typeof this.descriptionShort !== "undefined" && this.descriptionShort.length &&
                            <span key={this.id + "-treatment-text"}>
                                <small>{this.descriptionShort}</small>
                            </span>
                        }
                        {typeof this.descriptionLong !== "undefined" && this.descriptionLong.length &&
                            <span key={this.id + "-treatment-text"}>
                                <p>{this.descriptionLong}</p>
                            </span>
                        }
                    </div>
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

export default Treatment;