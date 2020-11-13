import { useContext } from "react";
import ReduxLiteContext from "../components/ReduxLiteContext";

const useDispatch = () => {
    const context = useContext(ReduxLiteContext);
    const { store } = context;

    return store.dispatch;
};

export default useDispatch;