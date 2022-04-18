import { Container, Typography } from "@mui/material";
import type { NextPage } from "next";

const User: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" component="div" gutterBottom>
        User Page
      </Typography>
    </Container>
  );
};

export default User;
