
import PostList from '../Posts/PostList';
import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../Actions/Posts';
import Form from '../Form/Form';
import beach from '../../images/beach1.jpeg';

const text = {
    color: 'white',
    border: '4px solid',
    background: 'rgb(59, 2, 6)',
    mixBlendMode: 'multiply',
    font: 'bolder 12vw',
    textAlign: 'center',
    margin: '0'
}

//Home
const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>

            <Grid container justify="space-between" alignItems="stretch" spacing={1}>
                <Grid item xs={12} sm={3}>
                    <Container>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Container>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Container>
                        <Typography style={text} align="center" variant="h3">POSTS</Typography>
                        <PostList setCurrentId={setCurrentId} />
                    </Container>
                </Grid>

            </Grid>

        </Grow >
    );
};

export default Home;