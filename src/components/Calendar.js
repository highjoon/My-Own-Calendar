import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import "dayjs/plugin/weekday";
import { useHistory } from "react-router";
import range from "lodash-es/range";

import { useSelector, useDispatch } from "react-redux";

import { CalendarContainer, DayContainer, DateContainer, Date, Day, ControlBtnContainer, CalendarBtn, NavBar, TodayBtn, MonthContainer, ChangeMonthBtn, Current, DarkModeBtn } from "../Styles/Style";

import Modal from "./Modal";

const Calendar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const dayObj = useSelector((state) => state.date.date);
    const todayObj = useSelector((state) => state.date.now);

    const todayYear = todayObj.get("year");
    const todayMonth = todayObj.get("month");
    const todayDate = todayObj.get("date");
    const today = dayObj.clone().year(todayYear).month(todayMonth).date(todayDate);

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const currentYear = dayObj.year();
    const currentMonth = dayObj.month();
    const daysCurrentMonth = dayObj.daysInMonth();

    const dayObjPrevMonth = dayjs(`${currentYear}-${currentMonth + 1}-1`);
    const daysPrevMonth = dayObjPrevMonth.day();

    const dayObjNextMonth = dayjs(`${currentYear}-${currentMonth + 1}-${daysCurrentMonth}`);
    const daysNextMonth = dayObjNextMonth.day();

    React.useEffect(() => {
        const targetDate = document.querySelector(".date" + today.date());
        if (dayObj.year() === todayYear && dayObj.month() === todayMonth && dayObj.date() === todayDate) {
            targetDate.style.background = "var(--color-light-yellow)";
        } else {
            targetDate.style.background = "var(--color-white)";
        }
    });

    return (
        <React.Fragment>
            <CalendarContainer className="calendarContainer">
                <DayContainer className="dayContainer">
                    {weekDays.map((day, idx) => (
                        <Day className={day} key={day}>
                            {day}
                        </Day>
                    ))}
                </DayContainer>
                <DateContainer className="dateContainer">
                    {range(daysPrevMonth).map((i) => (
                        <Date className="faded" key={i}>
                            {dayObjPrevMonth.subtract(daysPrevMonth - i, "day").date()}
                        </Date>
                    ))}
                    {range(daysCurrentMonth).map((i) => (
                        <Date key={i} className={"date" + (i + 1)}>
                            {i + 1}
                        </Date>
                    ))}

                    {range(6 - daysNextMonth).map((i) => (
                        <Date className="faded" key={i}>
                            {dayObjNextMonth.add(i + 1, "day").date()}
                        </Date>
                    ))}
                </DateContainer>
                <ControlBtnContainer>
                    <CalendarBtn
                        className="upload_btn"
                        onClick={() => {
                            history.push("/upload");
                        }}
                    >
                        추가하기
                    </CalendarBtn>
                    <CalendarBtn className="complete_check_btn">완료된 일정 보기</CalendarBtn>
                </ControlBtnContainer>
            </CalendarContainer>
        </React.Fragment>
    );
};

export default Calendar;
