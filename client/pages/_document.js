// import Document, { Html, Head, Main, NextScript } from "next/document"
// import styled from "styled-components"
// class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

//   render() {
//     return (
//       <Html>
//         <Head>
//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1.0, maximum-scale=1"
//           />
//           <link rel="preconnect" href="https://fonts.gstatic.com" />
//           <link
//             href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;700;800&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }

// export default MyDocument

import Document from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
