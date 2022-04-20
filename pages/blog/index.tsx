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
import { Post } from "../../types/PostTypes";

const Posts: NextPage<{ posts: Post[] }> = ({ posts }) => {
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
              <Link href={`/blog/comments/${post.id}`}>
                <IconButton edge="end" aria-label="comments">
                  <Comment />
                </IconButton>
              </Link>
            }
          >
            <ListItemAvatar>
              <Link href={`/blog/users/${post.userId}`}>
                <IconButton aria-label="user">
                  <Avatar>
                    <Person />
                  </Avatar>
                </IconButton>
              </Link>
            </ListItemAvatar>
            <ListItemText primary={post.title} secondary={post.body} />
          </ListItem>
        ))}
      </List>

      <Link href="/">
        <Button className="back-to-btn" variant="contained">
          Back to home
        </Button>
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
