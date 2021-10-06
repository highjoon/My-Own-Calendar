import Calendar from "../pages/Main";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "../Styles/GlobalStyle";
import Upload from "../pages/Upload";

function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <BrowserRouter>
                <Route component={Calendar} path="/" exact />
                <Route component={Upload} path="/upload" exact />
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
