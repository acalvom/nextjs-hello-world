import { Button, Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Head>
        <title>Home</title>
      </Head>
      <Typography variant="h1" component="div" gutterBottom>
        Home
      </Typography>
      <Link href="/blog">
        <Button sx={{ m: 2 }} variant="contained">
          Check posts
        </Button>
      </Link>
      <Link href="/memes">
        <Button sx={{ m: 2 }} variant="contained">
          Check memes
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
