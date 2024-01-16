import { Html, Head, Main, NextScript } from 'next/document'
import { ColorSchemeScript } from '@mantine/core'

export default Document;

const oldReturn = (
  <Html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme='auto' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
)

function Document() {
  return (
    <Html lang="en">
      <Head>
          {/* eslint-disable-next-line @next/next/no-css-tags */}
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
          <ColorSchemeScript defaultColorScheme='auto' />
      </Head>

      <body>
          <Main />
          <NextScript />
      </body>
    </Html>
  )
}
