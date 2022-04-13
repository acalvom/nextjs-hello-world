import { Button, Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const FirstPost: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Head>
        <title>Posts</title>
      </Head>
      <Typography variant="h2" component="div" gutterBottom>
        List of posts
      </Typography>
      <Link href="/">
        <Button variant="contained">Back to Home</Button>
      </Link>
    </Container>
  );
};

export default FirstPost;
