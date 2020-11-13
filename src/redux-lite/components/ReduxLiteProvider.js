import React from "react";
import ReduxLiteContext from "./ReduxLiteContext";

const ReduxLiteProvider = ({ store, children }) => {
    const contextValue = { store };

    return (
        <ReduxLiteContext.Provider value={contextValue}>
            {children}
        </ReduxLiteContext.Provider>
    );
};

export default ReduxLiteProvider;