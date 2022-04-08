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
                const {index_hold} = action.payload;
                return {
                    ...state,
                    todos: state.todos.filter((item, index) => index !== index_hold)
                }
            };

        case FINISH_TODO:
            {
                const {index} = action.payload;
                let element_holder = state.todos[index]

                return {
                    todos: [
                        ...state
                            .todos
                            .slice(0, index),
                        ...state
                            .todos
                            .slice(index + 1)
                    ],
                    done: [
                        ...state.done,
                        element_holder
                    ]
                }
            };

        case DELETE_DONE:
            {
                const {index} = action.payload;
                return {
                    ...state,
                    done: [
                        ...state
                            .done
                            .slice(0, index),
                        ...state
                            .done
                            .slice(index + 1)
                    ]
                }
            };

        default:
            return state
    }
}