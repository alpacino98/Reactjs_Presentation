import React, {useState, useEffect} from 'react';
import TodoCard from './TodoCard';
import {Typography, Card, CardContent, CardActionArea} from '@mui/material'
import {useSelector, useDispatch, connect} from 'react-redux';
import {finishTodo, deleteTodo} from '../redux/actions';

function TodoContainer(todos, done) {

    const dispatch = useDispatch();

    function onDelete(e, index) {
        e.preventDefault();
        dispatch(deleteTodo(index))
    }

    function onDone(e, index) {
        e.preventDefault();
        dispatch(finishTodo(index))
    }

    return (
        <div>
            <Typography variant="h5" component="div">
                TODO not Finished
            </Typography>
            {todos.todos && todos.todos.length > 0
                ? todos.todos.map(function (todo, index) {
                    return <TodoCard onDone={onDone} index={index} todo={todo} onDelete={onDelete}/>
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

const mapStateToProps = (state) => ({todos: state.todoState.todos});

export default connect(mapStateToProps)(TodoContainer);