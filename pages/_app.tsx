import React from 'react'
import { AppProps } from 'next/app'

import '../styles/index.css'

// alert('foo')

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
