const createAction = (type, action) => {
    const actionCreator = (...args) => {
        if (action) {
            const actionResult = action(...args);
            return { type, payload: actionResult };
        }

        return { type };
    }

    return actionCreator;
};

export default createAction;