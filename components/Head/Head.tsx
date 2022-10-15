import React, { ReactNode } from 'react'
import Head from 'next/head'

export interface DocHeadProps {
    title?: string
}

export const DocHead = ({ title }: DocHeadProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
    )
}
