import { Comment, Person } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Post } from "../types/PostTypes";

const Posts: NextPage<{ posts: Post[] }> = ({ posts }) => {
  // console.log(posts);
  return (
    <Container maxWidth="sm">
      <Head>
        <title>Posts</title>
      </Head>
      <Typography variant="h2" component="div" gutterBottom>
        List of posts
      </Typography>
      <List>
        {posts.map((post: Post) => (
          <ListItem
            key={post.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => console.log("comments")}
              >
                <Comment />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <IconButton aria-label="user" onClick={() => console.log("user")}>
                <Avatar>
                  <Person />
                </Avatar>
              </IconButton>
            </ListItemAvatar>
            <ListItemText primary={post.title} secondary={post.body} />
          </ListItem>
        ))}
      </List>

      <Link href="/">
        <Button variant="contained">Back to Home</Button>
      </Link>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return {
    props: { posts },
  };
};

export default Posts;
