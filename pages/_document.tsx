import { Head, Html, Main, NextScript } from 'next/document';

export default function _document() {
    return (
        <Html>
            <Head>
                <link
                    href='https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <body className='body'>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
