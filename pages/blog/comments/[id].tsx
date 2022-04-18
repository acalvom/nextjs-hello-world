import { Container, Typography } from "@mui/material";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Comment, Post } from "../../../types/PostTypes";

const Comments: NextPage<{ comments: Comment[] }> = (commments) => {
  console.log(commments);
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" component="div" gutterBottom>
        Comments Page
      </Typography>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
  );
  const comments: Comment[] = await res.json();
  return { props: { comments } };
};

export default Comments;
