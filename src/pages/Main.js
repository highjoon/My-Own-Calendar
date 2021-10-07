import React from "react";
import Calendar from "../components/Calendar";
import HeaderBar from "../components/Header";
import Modal from "../components/Modal";

const Main = () => {
    return (
        <React.Fragment>
            <HeaderBar />
            <Calendar />
            <Modal />
        </React.Fragment>
    );
};

export default Main;
