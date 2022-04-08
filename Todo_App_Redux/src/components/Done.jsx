import React, {useState, useEffect} from 'react';
import TodoCard from './TodoCard';
import {Typography, Card, CardContent, CardActionArea} from '@mui/material'
import {useSelector, useDispatch, connect} from 'react-redux';
import {deleteDone} from '../redux/actions'

function DoneContainer(done) {

    const dispatch = useDispatch();


    function onDelete(e, index) {
        e.preventDefault();
        dispatch(deleteDone(index))
    }

    console.log(done)

    return (
        <div>
            <Typography variant="h5" component="div">
                Finished TODO
            </Typography>
            {done.done && done.done.length > 0
                ? done.done.map(function (element, index) {
                    return <TodoCard index={index} todo={element} onDelete={onDelete}/>
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

const mapStateToProps = (state) => {return {done: state.todoState.done}};

export default connect(mapStateToProps)(DoneContainer);