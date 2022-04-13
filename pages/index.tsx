import type { NextPage } from 'next'
import Link from 'next/link'
import { Fragment } from 'react'

const Home: NextPage = () => {
  return (
    <Fragment>
      <h1>Hello world</h1>
      <h2>
        <Link href="/posts/first-post">
          <a>See 1st post</a>
        </Link>
      </h2>
    </Fragment>
  )
}

export default Home
