import { ADD_TODO, DELETE_TODO, FINISH_TODO, DELETE_DONE } from "./actionTypes";

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {title_payload:content.title, Description_payload: content.Description}
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
});

export const finishTodo = id => ({
    type: FINISH_TODO,
    payload: { id }
});

export const deleteDone = id => ({
    type: DELETE_DONE,
    payload: { id }
});

