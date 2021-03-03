import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
    InputAdornment,
    Typography,
    makeStyles,
    Card,
    CardContent,
    IconButton,
    TextField
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { addReply } from '../slices/commentSlice';
import NestedComments from './NestedComments';
import CommentHeader from './CommentHeader';

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

    }
})

const Comment = ({ comment }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [reply, setReply] = useState(false);
    const [replyContent, setReplyContent] = useState('')

    const replyHandler = () => {
        if (reply) {
            replyContent && dispatch(addReply({ content: replyContent, parentID: comment.id, id: uuidv4(), children: [], childrenCount: 0 }));

        }
        setReplyContent('')
        setReply(!reply)
    }

    return (
        <Card
            className={classes.comment}
        >
            <CommentHeader reply={reply} replyHandler={replyHandler} />
            <CardContent className={classes.commentContent}>
                <Typography>{comment.content}</Typography>
            </CardContent>
            {reply && <TextField
                value={replyContent}
                onChange={e => setReplyContent(e.target.value)}
                InputProps={{
                    endAdornment: <InputAdornment position="end">
                        <IconButton onClick={() => replyHandler()}>
                            <SendIcon />
                        </IconButton>
                    </InputAdornment>,
                }}
                placeholder="Type what you think"
                fullWidth variant="filled" />}

            <NestedComments comment={comment} />
        </Card>
    )
}

export default Comment
