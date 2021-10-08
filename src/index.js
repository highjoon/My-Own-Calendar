import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./shared/App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/configureStore";
import { ThemeProvider } from "styled-components";
import theme from "./Styles/theme";

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);

reportWebVitals();
