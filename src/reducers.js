import { combineReducers } from 'redux'
//we will use this method to combine reducers 
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISABILITY_FILTER,
    VisibilityFilters
} from './actions'
//these are the action types that we explicitly declared as constants.

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    //this reducer handles changing the state for the visibility filter based on what types of todos we want to show.
    switch (action.type) {
        case SET_VISABILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

function todos(state = [], action) {
    //this reducer handles anything related to todos. In this case, it's adding a todo and toggling a todo as completed or not.
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                    //new todos must be false 
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index == action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            //if no action type matches or nothing changed, return state
            return state
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp