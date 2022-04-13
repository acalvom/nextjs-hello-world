import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Fragment } from 'react'
import Head from 'next/head'
import Button from '@mui/material/Button'
import Post from '../components/Post'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hello world</h1>
      <h2>
        <Link href="/posts/first-post">
          <a>See 1st post</a>
        </Link>
      </h2>
      <Image src="/images/profile.jpeg" height={144} width={144} alt="Profile pic"/>
      <Button variant="contained">Hello World</Button>
      <Post></Post>
    </Fragment>
  )
}

export default Home
