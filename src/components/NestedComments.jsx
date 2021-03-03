import React, { useState, useEffect, useRef } from 'react'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { Card, IconButton, makeStyles, Typography } from '@material-ui/core';
import Comment from './Comment';




const useStyles = makeStyles({

    childComments: {
        display: 'flex',
        border: 'none',
        boxShadow: 'none',
        position: 'relative',
        marginLeft: 20,
        flexDirection: "column",
        '&::before': {
            content: '""',
            position: "absolute",
            top: 10,
            left: 0,
            width: 1,
            height: '100%',
            background: "#d3d3d3",
        }
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


const NestedComments = ({ comment }) => {
    const classes = useStyles();
    const [showChild, setShowChild] = useState(false)
    const hideButtonHandler = () => {
        setShowChild(!showChild)
    }

    return (
        <>
            {
                comment.children.length !== 0 ?
                    <IconButton
                        onClick={() => hideButtonHandler()}
                        fontSize="small"

                    >
                        {showChild ?
                            <React.Fragment>
                                <RemoveIcon color="secondary" fontSize="small" />

                            </React.Fragment>
                            :
                            <React.Fragment>
                                {/* <AddIcon color="primary" fontSize="small" /> */}
                                <Typography variant="body2">
                                    Show {comment.childrenCount} more
                                </Typography>
                            </React.Fragment>
                        }
                    </IconButton> : null
            }
            {
                showChild &&
                <Card className={classes.childComments}>

                    {(comment.children || []).map(comment => {
                        return (
                            <Comment key={comment.id} className={classes.comment} comment={comment} />
                        )
                    })}
                </Card>
            }


        </>
    )
}

export default NestedComments
