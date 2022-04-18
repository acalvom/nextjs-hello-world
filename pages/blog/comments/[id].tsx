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
import { Fragment } from "react";
import { Comment, Post } from "../../../types/PostTypes";

const Comments: NextPage<{ comments: Comment[] }> = ({ comments }) => {
  console.log(comments);
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="div" gutterBottom>
        Comments from post:
      </Typography>
      <List>
        {comments.map((comment) => (
          <ListItem alignItems="flex-start" key={comment.id}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </Fragment>
              }
            />
          </ListItem>
        ))}
      </List>

      <Link href="/">
        <Button variant="contained">Back to Home</Button>
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
