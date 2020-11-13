import createStore from "../__redux-lite__/createStore";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, { counter: 0 });

export default store;