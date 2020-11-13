const createStore = (rootReducer, initialState) => {
    let state = rootReducer(initialState, { type: "__INIT__" });

    return {
        dispatch(action) {
            state = rootReducer(state, action);
        },
        getState() {
            return state;
        }
    };
};

export default createStore;