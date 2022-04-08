import React, { useState, useEffect } from 'react';
import {Dialog, DialogTitle, DialogContent, Button, DialogContentText, DialogActions, TextField} from '@mui/material'

function NewTodo(props) {

    const {open, handleClose, setTodos, todos} = props

    const [title, setTitle] = useState("")
    const [description,setDescription] = useState("")

    useEffect(()=>{
        console.log(todos)
    }, [])

    const handleCreate = () => {
        let todo_holder = todos
        todo_holder.push({'title': title, 'Description': description})
        setTodos([...todo_holder])
        console.log(todo_holder)
        handleClose()
    }

    const handleTitleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
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
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
     );
}

export default NewTodo;