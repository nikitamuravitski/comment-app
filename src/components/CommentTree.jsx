import React, { useEffect } from 'react'
import { Grid, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux'
import Comment from './Comment';


const CommentTree = () => {
    const comments = useSelector(state => state.comments);
    const content = comments.map(item => <Comment comment={item} key={item.id}/>)

        return (
            <Grid container>
                <Paper>
                    {content}
                </Paper>
            </Grid>
        )
}

export default CommentTree
