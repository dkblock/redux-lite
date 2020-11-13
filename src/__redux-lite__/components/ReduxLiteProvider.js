import React from "react";
import ReduxLiteContext from "./ReduxLiteContext";

const ReduxLiteProvider = ({ store, children }) => {
    return (
        <ReduxLiteContext.Provider value={{ store }}>
            {children}
        </ReduxLiteContext.Provider>
    );
};

export default ReduxLiteProvider;