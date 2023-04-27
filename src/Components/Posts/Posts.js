import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const Posts = ({setCurrentId}) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post} xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
