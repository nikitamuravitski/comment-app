import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { Avatar, TextField, Grid, Button, makeStyles, Paper } from '@material-ui/core';
import { addComment } from '../slices/commentSlice'
const useStyles = makeStyles({
    root: {
        width: "fit-content",
        alignItems: 'center',
        display: 'flex',
        margin: "20px 0 20px 0",

    },
    rootPaper: {
        width: "fit-content",
        alignItems: 'center',
        display: 'flex',
        marginButtom: 20,
        padding: 10
    },
    avatar: {
        marginRight: 20
    },
    submitBtn: {
        marginLeft: 15
    }
})


const AddComment = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [content, setContent] = useState('');

    const clickHandler = () => {
        dispatch(addComment({ content, id: uuidv4(), children: [], childrenCount: 0 }))
        setContent('');
    }
    return (
        <Grid container className={classes.root}>
            <Paper elevation={3} className={classes.rootPaper}>
                <Avatar className={classes.avatar} />
                <TextField
                    multiline
                    value={content}
                    placeholder="Enter comment"
                    onChange={e => setContent(e.target.value)}
                />
                <Button
                    className={classes.submitBtn}
                    onClick={() => clickHandler()}
                >Submit</Button>
            </Paper>

        </Grid>


    )
}

export default AddComment
