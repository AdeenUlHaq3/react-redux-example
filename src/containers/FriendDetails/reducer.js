export default (state = null, action) => {
    switch(action.type) {
        case 'SELECTED_FRIEND':
            return action.payload;
    }
    return state;
}