import { Button, Container, Link, Typography } from "@mui/material";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import UserInfoCard from "../../../components/UserInfoCard";
import { User } from "../../../types/PostTypes";

const User: NextPage<{ user: User }> = ({ user }) => {
  return (
    <Container maxWidth="sm">
      <Head>
        <title>User info</title>
      </Head>
      <Typography variant="h2" component="div" gutterBottom>
        User info
      </Typography>

      <UserInfoCard user={user} />

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
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user: User = await res.json();

  return {
    props: { user },
  };
};

export default User;
