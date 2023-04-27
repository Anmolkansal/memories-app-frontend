import React, { useEffect, useState} from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./assets/memories.png";
import Posts from "./Components/Posts/Posts";
import Form from "./Components/Form/Form";
import useStyles from "./styles";
import './index.css';
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

const App = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState();
  const dispatch = useDispatch();

  useEffect(()=>{
   dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img className={classes.image} src={memories} alt="memories" height="60" />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              // direction='column-reverse'
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default App;
