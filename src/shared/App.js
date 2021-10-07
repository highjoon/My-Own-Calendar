import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Modal from "react-modal";
import { history } from "../redux/configureStore";
import Main from "../pages/Main";
import GlobalStyle from "../Styles/GlobalStyle";

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
