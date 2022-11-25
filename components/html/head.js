import Head from 'next/head';

export default function HTMLHead(props) {

    return (
        <Head>
            {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
            <title>{props.title}</title>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}