import { Grid } from '@material-ui/core';
import React from 'react';
import AddComment from './components/AddComment';
import CommentTree from './components/CommentTree';

const App = () => {
    return (
        <Grid container>
            <AddComment />
            <CommentTree />
        </Grid>
    )
}

export default App
