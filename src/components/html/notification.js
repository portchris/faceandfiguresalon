import React, { Component, useState, useEffect } from 'react';

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
        this.key = props.id;
        this.type = props.type;
        this.heading = props.heading;
        this.content = props.content;
        this.state = {
            show: props.show ?? false
        };
    }

    render() {

        var textColour = "";
        var notificationColour = "";
        const id = "alert-" + this.key + "-" + this.makeUUID();
        switch (this.type) {
            case "critical":
            case "crit":
            case "danger":
            case "error":
            case "err":
            case "e":
                textColour = "text-red-500";
                notificationColour = "border-red-400 text-red-700 bg-red-100";
                break;
            case "warning":
            case "warn":
            case "w":
                textColour = "text-orange-500";
                notificationColour = "border-orange-400 text-orange-700 bg-orange-100";
                break;
            case "success":
            case "complete":
            case "c":
            case "s":
                textColour = "text-green-500";
                notificationColour = "border-green-400 text-green-700 bg-green-100";
                break;
            case "information":
            case "info":
            case "i":
            default:
                textColour = "text-grey-500";
                notificationColour = "border-gray-400 text-gray-700 bg-gray-100";
                break;
        }

        return (
            <React.Fragment>
                {this.state.show &&
                    <div
                        key={id}
                        id={id}
                        class={"relative border px-4 py-3 mb-4 rounded" + notificationColour + " " + textColour}
                        role="alert"
                    >
                        <strong class="font-bold">{this.heading}</strong>
                        <span class="block sm:inline">{this.content}</span>
                        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg
                                class="fill-current h-6 w-6"
                                role="button"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                onClick={(e) => document.getElementById(id).remove()}
                            >
                                <title>Close</title>
                                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                            </svg>
                        </span>
                    </div>
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