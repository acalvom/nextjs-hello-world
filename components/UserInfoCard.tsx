import { Person } from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import { User } from "../types/PostTypes";

export default function RecipeReviewCard(props: { user: User }) {
  const [open, setOpen] = useState(false);
  const user = props.user;

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <Person />
          </Avatar>
        }
        title={user.name}
        subheader={user.username}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" component="div">
          <Typography variant="overline" display="block">
            Email: {user.email}
          </Typography>
          <Typography variant="overline" display="block">
            Phone: {user.phone}
          </Typography>
          <Typography variant="overline" display="block">
            Website: {user.website}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "space-evenly" }}>
        <Link href={`/blog/users/${user.id}/posts`}>
          <IconButton aria-label="check-posts">
            <ArticleIcon />
          </IconButton>
        </Link>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </CardActions>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h5" align="center">
            More details
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            gutterBottom
          >
            <Typography variant="h6" display="block">
              Address:
            </Typography>
            <Typography variant="overline" display="block">
              Street: {user.address.street}
            </Typography>
            <Typography variant="overline" display="block">
              Suite: {user.address.suite}
            </Typography>
            <Typography variant="overline" display="block">
              City: {user.address.city}
            </Typography>
            <Typography variant="overline" display="block">
              Zipcode: {user.address.zipcode}
            </Typography>
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            gutterBottom
          >
            <Typography variant="h6" display="block">
              Company info:
            </Typography>
            <Typography variant="overline" display="block">
              Name: {user.company.name}
            </Typography>
            <Typography variant="overline" display="block">
              Catch Phrase: {user.company.catchPhrase}
            </Typography>
            <Typography variant="overline" display="block">
              BS: {user.company.bs}
            </Typography>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
