import React, {useState, useEffect} from 'react';
import TodoCard from './TodoCard';
import {Typography, Card, CardContent, CardActionArea} from '@mui/material'

function DoneContainer(props) {

    const {done, setDone, setTodos} = props;

    function onDelete(e, index) {
        e.preventDefault();
        let done_holder = done;
        done_holder.splice(index, 1);
        setDone([...done_holder])
    }

    return (
        <div>
            <Typography variant="h5" component="div">
                Finished TODO
            </Typography>
            {done.length > 0
                ? done.map(function (element, index) {
                    return <TodoCard
                        index={index}
                        todo={element}
                        setTodos={setTodos}
                        setDone={setDone}
                        onDelete={onDelete}/>
                })
                : <Card>
                    <CardActionArea>
                        <CardContent>
                            < Typography variant="body2" component="div">
                                No Todo Found...
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            }
        </div>
    );
}

export default DoneContainer;