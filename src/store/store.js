
import { createStore } from 'redux';

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'CHANGE_TITLE':
            document.title = action.payload
            return {
                ...state,
                title: action.payload
            }

        default:
            return state
    }
}


const store = createStore(reducer) // store


export default store;