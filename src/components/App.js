import React from "react";
import ReduxLiteProvider from "../__redux-lite__/components/ReduxLiteProvider";
import Counter from "./Counter";
import store from "../store/store";
import "./App.css";

const App = () => {
    return (
        <ReduxLiteProvider store={store}>
            <div className={"app"}>
                <Counter/>
            </div>
        </ReduxLiteProvider>
    );
};

export default App;