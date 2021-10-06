import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";

import style from "../Styles/Style";
import { actionCreators as dateActions } from "../redux/modules/date";

const HeaderBar = (props) => {
    const [dayObj, setDayObj] = useState(dayjs());

    const thisYear = dayObj.year();
    const thisMonth = dayObj.month();
    const thisDate = dayObj.date();
    const daysInMonth = dayObj.daysInMonth();

    const prevMonth = () => {
        setDayObj(dayObj.subtract(1, "month"));
    };

    const nextMonth = () => {
        setDayObj(dayObj.add(1, "month"));
    };
    console.log(props);

    return (
        <React.Fragment>
            <style.NavBar className="navbar">
                <style.TodayBtn>Today</style.TodayBtn>
                <MonthContainer>
                    <ChangeMonthBtn className="prev" onClick={prevMonth}>
                        Prev
                    </ChangeMonthBtn>
                    <Current className="current">{dayObj.format("MMM DD YYYY")}</Current>
                    <ChangeMonthBtn className="next" onClick={nextMonth}>
                        Next
                    </ChangeMonthBtn>
                </MonthContainer>
                <DarkModeBtn className="dark_btn">Dark</DarkModeBtn>
            </style.NavBar>
        </React.Fragment>
    );
};

export default HeaderBar;
