export default (friend) => {
    return {
        type: 'SELECTED_FRIEND',
        payload: friend
    };
}