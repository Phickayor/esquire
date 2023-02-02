import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="rooms bar hotel " />
        <meta name="description" content="Esquire Hotel " /> */}
        <script src="https://js.paystack.co/v1/inline.js" async />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
