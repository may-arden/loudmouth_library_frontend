// to avoid extra nesting define initial state as empty array

export const composersReducer = state = [], action) => {
    switch(action.type) {
        case 'FETCH_ARTIFACTS':
            return action.payload
        case 'ADD_ARTIFACT':
            return [...state, action.payload]
        default: return state 
    }
}