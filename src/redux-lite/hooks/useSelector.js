import { useContext } from "react";
import ReduxLiteContext from "../components/ReduxLiteContext";

const useSelector = (selector) => {
    const context = useContext(ReduxLiteContext);
    const { store } = context;
    const state = store.getState();

    return selector(state);
};

export default useSelector;