import { createStore } from "redux"

const initialState = {
    title: 'The Lord of the Rings',
    characters: [],
}

const store = createStore((state = initialState, action) => {
    switch (action.type) {
        case 'SET_CHARACTERS':
            return {
                ...state,
                characters: action.payload
            }
        case 'SET_TITLE':
            return {
                ...state,
                title: action.payload
            }
        default:
            return state
    }
})