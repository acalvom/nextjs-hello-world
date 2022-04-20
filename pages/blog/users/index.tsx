import { Button, Container, Typography } from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import UserInfoTable from "../../../components/CollapsibleTable";
import { User } from "../../../types/PostTypes";

const Users: NextPage<{ users: User[] }> = ({ users }) => {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>Users</title>
      </Head>
      <Typography variant="h2" component="div" gutterBottom>
        List of users
      </Typography>

      <UserInfoTable users={users} />

      <Link href="/" passHref>
        <Button className="back-to-btn" variant="contained">
          Back to home
        </Button>
      </Link>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return {
    props: { users },
  };
};

export default Users;
