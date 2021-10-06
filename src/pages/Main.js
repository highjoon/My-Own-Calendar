import React, { useState } from "react";
import HeaderBar from "../components/Header";
import Calendar from "../components/Calendar";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import "dayjs/plugin/weekday";

const Main = () => {
    return (
        <React.Fragment>
            <Calendar />
        </React.Fragment>
    );
};

export default Main;
