import React, { Component } from 'react';

const PRISMIC_MARKUP_PARAGRAPH = 'paragraph';
const PRISMIC_MARKUP_HEADING1 = 'heading1';
const PRISMIC_MARKUP_HEADING2 = 'heading2';
const PRISMIC_MARKUP_HEADING3 = 'heading3';
const PRISMIC_MARKUP_HEADING4 = 'heading4';
const PRISMIC_MARKUP_IMAGE = 'image';

class Content extends Component {

    static content;

    constructor(props) {
        super(props);
        this.content = props.content;
    }

    render() {

        let render = [];

        for (let i in this.content) {
            let c = this.content[i];
            if (!c instanceof Object || c.type === null || c.text === null) {
                continue;
            }

            switch (c.type) {
                case PRISMIC_MARKUP_PARAGRAPH:
                    render.push(<p key={'content-paragraph-' + i} className={'mb-4 content-paragraph-' + i}>{c.text}</p>)
                    break;
                case PRISMIC_MARKUP_HEADING1:
                    render.push(<h1 key={'content-heading-' + i} className={'text-5xl content-heading-' + i}>{c.text}</h1>)
                    break;
                case PRISMIC_MARKUP_HEADING2:
                    render.push(<h2 key={'content-heading-' + i} className={'text-4xl content-heading-' + i}>{c.text}</h2>)
                    break;
                case PRISMIC_MARKUP_HEADING3:
                    render.push(<h3 key={'content-heading-' + i} className={'text-3xl content-heading-' + i}>{c.text}</h3>)
                    break;
                case PRISMIC_MARKUP_HEADING4:
                    render.push(<h4 key={'content-heading-' + i} className={'text-2xl content-heading-' + i}>{c.text}</h4>)
                    break;
                case PRISMIC_MARKUP_IMAGE:
                    render.push(<img key={'content-image-' + i} className={'content-image-' + i} src={c.url} alt={c.alt} width={c.dimensions.width} height="auto" />)
                    break;
                default:
                    render.push(<span key={'content-span-' + i} className={'mb-4 content-span-' + i}>{c.text}</span>)
                    break;
            }
        }

        return (render);
    }
}

export default Content;