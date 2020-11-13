const createStore = (rootReducer, initialState) => {
    const subscribers = [];
    let state = rootReducer(initialState, { type: "__INIT__" });

    return {
        dispatch(action) {
            state = rootReducer(state, action);
            subscribers.forEach(sub => sub(state));
        },
        getState() {
            return state;
        },
        subscribe(callback) {
            subscribers.push(callback);
        }
    };
};

export default createStore;