import React, {useState,useEffect} from "react";
import {Container, Grow, Grid, Paper} from '@material-ui/core';
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Posts from '../Posts/posts';
import Form from '../Form/form';
import Pagination from '../Pagination/pagination.jsx';
import useStyle from './styles';
export const Home = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch])
    return (
        <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7} >
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        <Paper className={classes.Pagination} elevation={6}>
                                <Pagination />
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}
