import { Button, Container, Typography } from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Posts: NextPage = ({ posts }: any) => {
  console.log(posts);
  return (
    <Container maxWidth="sm">
      <Head>
        <title>Posts</title>
      </Head>
      <Typography variant="h2" component="div" gutterBottom>
        List of posts
      </Typography>

      <ul>
        {posts.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      <Link href="/">
        <Button variant="contained">Back to Home</Button>
      </Link>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  console.log(posts);

  return {
    props: { posts },
  };
};

export default Posts;
