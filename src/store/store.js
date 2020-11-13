import createStore from "../redux-lite/createStore";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, { counter: 0 });

export default store;