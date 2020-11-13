import { useContext, useState } from "react";
import ReduxLiteContext from "../components/ReduxLiteContext";

const useSelector = (selector) => {
    const context = useContext(ReduxLiteContext);
    const { store } = context;
    const [nextState, setNextState] = useState(store.getState());

    store.subscribe((state) => setNextState(state));

    return selector(nextState);
};

export default useSelector;