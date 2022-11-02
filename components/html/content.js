import React, { Component } from 'react';

const PRISMIC_MARKUP_PARAGRAPH = 'paragraph';

class Content extends Component {

    static content;

    constructor(props) {
        super(props);
        this.content = props.content;
    }

    render() {

        let render = [];

        for (let i in this.content)  {
            let c = this.content[i];
            if (!c instanceof Object || c.type === null || c.text === null) {
                continue;
            }

            switch (c.type) {
                case PRISMIC_MARKUP_PARAGRAPH:
                    render.push(<p key={'content-paragraph-' + i} className={'content-paragraph-' + i}>{c.text}</p>)
                    break;
                default:
                    render.push(<span key={'content-span-' + i} className={'content-span-' + i}>{c.text}</span>)
                    break;
            }
        }

        return (render);
    }
}

export default Content;