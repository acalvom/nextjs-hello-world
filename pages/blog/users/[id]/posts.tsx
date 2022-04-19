import { Comment, Person } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Post, User } from "../../../../types/PostTypes";

const PostsByUser: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Container maxWidth="sm">
      <Head>
        <title>Posts by user</title>
      </Head>
      <Typography variant="h2" component="div" gutterBottom>
        Posts by user
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

      <Link href="/blog">
        <Button className="back-to-btn" variant="contained">
          Back to Blog
        </Button>
      </Link>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
  const paths = users.map((user) => ({
    params: { id: String(user.id) },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}/posts`
  );
  const posts: Post[] = await res.json();

  return {
    props: { posts },
  };
};

export default PostsByUser;
