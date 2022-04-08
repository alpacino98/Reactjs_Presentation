import React, { useState, useEffect } from 'react';
import TodoCard from './TodoCard';
import {Typography, Card, CardContent,
    CardActionArea,
    } from '@mui/material'

function TodoContainer(props) {
    let {todos, done, setTodos, setDone} = props;

    function onDelete(e,index){
        e.preventDefault();
        let todo_holder = todos;
        todo_holder.splice(index, 1);
        setTodos([...todo_holder])
    }

    function onDone(e,index){
        e.preventDefault();
        let todo_holder = todos;
        const dummy_done = todo_holder[index]; 
        todo_holder.splice(index, 1);
        setTodos([...todo_holder]);
        let done_holder = done;
        done_holder.push(dummy_done);
        setDone([...done_holder]);
    }

    return (
    <div>
        <Typography variant="h5" component="div">
            TODO not Finished
        </Typography>
        {   todos.length > 0 ?
            todos.map(function(todo, index){
                return <TodoCard onDone={onDone} index={index} todo={todo} setTodos={setTodos} setDone={setDone} onDelete={onDelete} />
            }):
            <Card>
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

export default TodoContainer;