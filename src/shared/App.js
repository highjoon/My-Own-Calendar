import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";
import Main from "../pages/Main";
import { actionCreators as scheduleActions } from "../redux/modules/schedule";
import GlobalStyle from "../Styles/GlobalStyle";

function App() {
    const dispatch = useDispatch();
    dispatch(scheduleActions.loadScheduleFB());
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
