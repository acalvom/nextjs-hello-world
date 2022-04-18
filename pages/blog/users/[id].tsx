import { Container, Typography } from "@mui/material";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Post } from "../../../types/PostTypes";

const User: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" component="div" gutterBottom>
        User Page
      </Typography>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  console.log("posts", posts, { posts });
  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));
  console.log(paths);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  console.log(params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
  );
  const comments: any = await res.json();
  console.log(comments);
  return { props: { comments } };
};

export default User;
