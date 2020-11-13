import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ReduxLiteProvider from "./redux-lite/components/ReduxLiteProvider";
import store from "./store/store";

ReactDOM.render(
    <ReduxLiteProvider store={store}>
        <App/>
    </ReduxLiteProvider>,
    document.getElementById("root")
);
