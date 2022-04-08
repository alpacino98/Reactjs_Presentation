import React, {useState} from 'react'
import './App.css'
import TodoContainer from './components/Todo'
import DoneContainer from './components/Done'
import NewTodo from './components/modals/NewTodo'
import {Typography, Grid, Button, AppBar, Toolbar, Box} from '@mui/material'

function App() {
    const [todos,
        setTodos] = useState([])
    const [done,
        setDone] = useState([])

    const [open,
        setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleCreateTodo(e) {
        e.preventDefault();
        handleClickOpen();

    }

    return (
        <div className="App">
            <Box sx={{
                flexGrow: 1
            }}>
                <AppBar position="static">
                    <Toolbar style={{'justifyContent':'center', textAlign:'center',}}>
                        <Typography
                            style={{'justifyContent':'center', }}
                            variant="h6"
                            component="div"
                            sx={{
                            flexGrow: 1
                        }}>
                            Todo App
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Grid container spacing={2} style={{'marginTop': '15px'}}>
                <Grid item xs={4}/>
                <Grid
                    item
                    xs={4}
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center">
                    <TodoContainer done={done} todos={todos} setTodos={setTodos} setDone={setDone}/>
                </Grid>
                <Grid item xs={4}/>
                <Grid item xs={4}/>
                <Grid
                    item
                    xs={4}
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center">
                    <DoneContainer done={done} setTodos={setTodos} setDone={setDone}/>
                </Grid>
                <Grid item xs={4}/>
                <Grid
                    item
                    xs={12}
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center">
                    <Button variant="contained" onClick={handleCreateTodo}>
                        Create new Todo
                    </Button>
                </Grid>
                <NewTodo
                    open={open}
                    handleClose={handleClose}
                    setTodos={setTodos}
                    todos={todos}/>
            </Grid>
        </div>
    )
}

export default App;