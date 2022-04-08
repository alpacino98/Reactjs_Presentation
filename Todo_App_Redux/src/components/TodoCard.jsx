import React, {useState, useEffect} from 'react';
import {
    Typography,
    Card,
    CardContent,
    CardActionArea,
    CardActions,
    Button
} from '@mui/material'

function TodoCard(props) {
    const {
        todo,
        index,
        onDelete,
        onDone
    } = props;

    return (
        <Card id ={`${index}_todo`} key={`${index}_todo`} style={{
            'marginTop': '15px'
        }}>
            <CardActionArea>
                <CardContent>
                    < Typography gutterBottom variant="h5" component="div">
                        {todo.title}
                    </Typography>
                    < Typography variant="body2" component="div">
                        {todo.Description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    size="small"
                    color="primary"
                    onClick={(e) => {
                    onDelete(e, index)
                }}>
                    Delete
                </Button>
                {onDone
                    ? <Button
                            size="small"
                            color="primary"
                            onClick={(e) => {
                            onDone(e, index)
                        }}>
                            Finished
                        </Button>
                    : null}
            </CardActions>
        </Card>
    );
}

export default TodoCard;