
import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/SinglePost';
import useStyles from './styles';

const PostList = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid container key={post._id} item xs={12} sm={4} md={4}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default PostList;