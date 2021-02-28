
import PostList from '../Posts/PostList';
import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../Actions/Posts';
import Form from '../Form/Form';
import beach from '../../images/beach1.jpeg';

//Home
const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Grow in>
            {/* <Container > */}
            <Grid container style={{ margin: '0 auto', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: `url(${beach})`, height: '100vh', position: 'relative' }} container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid id="formStyle" item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <PostList setCurrentId={setCurrentId} />
                </Grid>

            </Grid>
            {/* </Container> */}
        </Grow>
    );
};

export default Home;