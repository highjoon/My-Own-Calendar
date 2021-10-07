import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import GlobalStyle from "../Styles/GlobalStyle";
import Main from "../pages/Main";
import Modal from "react-modal";

function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <ConnectedRouter history={history}>
                <Route component={Main} path="/" exact />
            </ConnectedRouter>
        </React.Fragment>
    );
}

Modal.setAppElement("#root");

export default App;
