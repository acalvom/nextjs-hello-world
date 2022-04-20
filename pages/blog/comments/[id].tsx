import {
  Avatar,
  Button,
  Container,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { Comment, Post } from "../../../types/PostTypes";

const Comments: NextPage<{ comments: Comment[] }> = ({ comments }) => {
  return (
    <Container maxWidth="sm">
      <Head>
        <title>Comments</title>
      </Head>
      <Typography variant="h2" component="div" gutterBottom>
        Comments from post:
      </Typography>
      <List>
        {comments.map((comment) => (
          <ListItem alignItems="flex-start" key={comment.id}>
            <ListItemAvatar>
              <Avatar alt={comment.email} />
            </ListItemAvatar>
            <ListItemText
              primary={comment.name}
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: "inline", marginRight: "0.5em" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {comment.email}
                  </Typography>
                  {comment.body}
                </Fragment>
              }
            />
          </ListItem>
        ))}
      </List>

      <Link href="/blog">
        <Button className="back-to-btn" variant="contained">
          Back to Blog
        </Button>
      </Link>
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

  return {
    props: { comments },
  };
};

export default Comments;
