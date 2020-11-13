import { increment, decrement } from "./actions";

const rootReducer = (state, action) => {
    switch (action.type) {
        case increment().type:
            return { ...state, counter: state.counter += 1};
        case decrement().type:
            return { ...state, counter: state.counter -= 1 };
        default:
            return state;
    }
};

export default rootReducer;