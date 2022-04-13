import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment } from 'react'

const FirstPost: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/"><a>Send me back</a></Link>
    </Fragment>

  )
}

export default FirstPost