import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavBar, TodayBtn, MonthContainer, ChangeMonthBtn, Current } from "../Styles/Style";

import { actionCreators as dateActions } from "../redux/modules/date";

const HeaderBar = (props) => {
    const dispatch = useDispatch();

    const dayObj = useSelector((state) => state.date.date);
    const todayObj = useSelector((state) => state.date.now);

    const prevMonth = () => {
        dispatch(dateActions.setDate(dayObj.clone().subtract(1, "month")));
    };

    const nextMonth = () => {
        dispatch(dateActions.setDate(dayObj.clone().add(1, "month")));
    };

    const moveToday = () => {
        const todayYear = todayObj.get("year");
        const todayMonth = todayObj.get("month");
        const todayDate = todayObj.get("date");
        const today = dayObj.clone().year(todayYear).month(todayMonth).date(todayDate);
        dispatch(dateActions.setDate(today));
    };

    return (
        <React.Fragment>
            <NavBar className="navbar">
                <TodayBtn onClick={moveToday}>Today</TodayBtn>
                <MonthContainer>
                    <ChangeMonthBtn className="prev" onClick={prevMonth}>
                        Prev
                    </ChangeMonthBtn>
                    <Current className="current">{dayObj.format("MMM YYYY")}</Current>
                    <ChangeMonthBtn className="next" onClick={nextMonth}>
                        Next
                    </ChangeMonthBtn>
                </MonthContainer>
            </NavBar>
        </React.Fragment>
    );
};

export default HeaderBar;
