import React, { useState } from 'react'
import { Avatar, makeStyles, CardHeader, IconButton, CardActions, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReplyIcon from '@material-ui/icons/Reply';


const useStyles = makeStyles({

    avatar: {
        marginRight: 20,
        marginBottom: 5
    },
    submitBtn: {
        marginLeft: 10
    },

    comment: {
        border: "none",
        boxShadow: "none",
        width: '100%'

    },
    commentContent: {
        margin: 0,
        padding: '5px 0 10px 20px',

    },

})
const CommentHeader = ({ reply, replyHandler }) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CardHeader
                avatar={
                    <Avatar className={classes.avatar} />
                }
                title="Author Name"
                subheader={new Date().toDateString()}
                action={
                    <CardActions>
                        {!reply && <IconButton onClick={() => replyHandler()}>
                            <ReplyIcon />
                        </IconButton>
                        }
                    </CardActions>
                }
            />
        </React.Fragment>
    )

}

export default CommentHeader
