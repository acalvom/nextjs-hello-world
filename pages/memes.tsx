import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { Meme, Memes } from "../types/MemeTypes";

const Memes: NextPage<{ memes: Meme[] }> = ({ memes }) => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h2" component="div" gutterBottom>
        List of memes
      </Typography>

      {memes.map((item) => (
        <Card key={item.id}>
          <CardMedia
            component="img"
            width={item.width}
            image={item.url}
            alt={item.id}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
          </CardContent>
        </Card>
      ))}

      <Link href="/">
        <Button variant="contained">Back to Home</Button>
      </Link>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({}) => {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const memes: Memes = await res.json();
  // console.log(memes.data);
  return {
    props: memes.data,
  };
};

export default Memes;
