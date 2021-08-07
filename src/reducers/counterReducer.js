function counterReducer(state = {count: 0}, action) {
    console.log("counterReducer: ", state, action);
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return {count: action.payload};
        case 'onChange':
            return {count: action.payload};
        default:
            return state;
    }
}

export default counterReducer;