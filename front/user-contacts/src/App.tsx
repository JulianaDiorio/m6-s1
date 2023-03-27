import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouteMain } from "./features/routes";
import { GlobalStyle } from "./features/styles/global";
import React from "react";

function App() {
    return (
        <>
            <GlobalStyle />
            <RouteMain />
            <ToastContainer />
        </>
    );
}

export default App;
