import {ADD_TODO, DELETE_TODO, FINISH_TODO, DELETE_DONE} from "../actionTypes";

const initialState = {
    todos: [],
    done: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            {
                const {title_payload, Description_payload} = action.payload;
                return {
                    ...state,
                    todos: [
                        ...state.todos, {
                            title: title_payload,
                            Description: Description_payload
                        }
                    ]
                }
            };

        case DELETE_TODO:
            {
                const {id} = action.payload;
                console.log(id)
                return {
                    ...state,
                    todos: state.todos.filter((item, index) => index !== id)
                }
            };

        case FINISH_TODO:
            {
                const {id} = action.payload;
                let element_holder = state.todos[id]

                return {
                    todos: [
                        ...state
                            .todos
                            .slice(0, id),
                        ...state
                            .todos
                            .slice(id + 1)
                    ],
                    done: [
                        ...state.done,{
                            title: element_holder.title,
                            Description: element_holder.Description
                        }
                    ]
                }
            };

        case DELETE_DONE:
            {
                const {id} = action.payload;
                return {
                    ...state,
                    done: [
                        ...state
                            .done
                            .slice(0, id),
                        ...state
                            .done
                            .slice(id + 1)
                    ]
                }
            };

        default:
            return state
    }
}