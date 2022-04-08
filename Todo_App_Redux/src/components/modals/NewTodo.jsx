import React, { useState, useEffect } from 'react';
import {Dialog, DialogTitle, DialogContent, Button, DialogContentText, DialogActions, TextField} from '@mui/material'
import { useSelector } from 'react-redux';
import { useDispatch, connect } from 'react-redux';
import {addTodo} from '../../redux/actions'

function NewTodo(props) {

    const {addTodo, open, handleClose} = props;

    const dispatch = useDispatch();

    const [title, setTitle] = useState("")
    const [description,setDescription] = useState("")

    const handleCreate = (e) => {
        e.preventDefault();
        const content = {'title': title, 'Description': description}
        dispatch(addTodo(content))
        handleClose(e)
    }

    const handleTitleChange = (e) => {
        e.preventDefault();
        setTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        e.preventDefault();
        setDescription(e.target.value)
    }

    return ( 
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter new Todo.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="todo-title"
            label="todo-title"
            fullWidth
            variant="standard"
            onChange={handleTitleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="todo-description"
            label="todo-description"
            fullWidth
            variant="standard"
            onChange={handleDescriptionChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(e) => {handleCreate(e)}}>Create</Button>
        </DialogActions>
      </Dialog>
     );
}

const mapStateToProps = (state) => ({
  todos: state.todoState.todos,
  addTodo: addTodo
});

export default connect(
  mapStateToProps
)(NewTodo);
