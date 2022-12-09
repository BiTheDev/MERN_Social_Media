import React, {useState,useEffect} from "react";
import {Container, Grow, Grid} from '@material-ui/core';
import { useDispatch } from "react-redux";
import {getPosts} from'./actions/posts'
import Posts from "./components/Posts/posts.js";
import Form from "./components/Form/form.js";
import useStyle from './styles';
import Navbar from "./components/NavBar/Navbar";
const App = () =>{
    const classes = useStyle();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch])
    return(
        <Container maxWidth="lg">
            <Navbar/>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7} >
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;