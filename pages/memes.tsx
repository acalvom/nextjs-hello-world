import { Button, Container, Typography } from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Memes } from "../types/MemeTypes";

const Memes: NextPage<{ memes: Memes }> = ({ memes }) => {
  console.log(memes);
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="div" gutterBottom>
        List of memes
      </Typography>

      <Link href="/">
        <Button variant="contained">Back to Home</Button>
      </Link>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({}) => {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const memes: Memes = await res.json();
  console.log(memes.data);
  return {
    props: { memes },
  };
};

export default Memes;
