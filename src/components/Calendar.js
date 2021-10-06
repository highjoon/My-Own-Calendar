import React, { useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import "dayjs/plugin/weekday";
import style from "../Styles/Style";
import Detail from "./Detail";
import { useHistory } from "react-router";
import range from "lodash-es/range";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const todayObj = dayjs();

const Calendar = () => {
    const history = useHistory();
    const [dayObj, setDayObj] = useState(dayjs());

    const thisYear = dayObj.year();
    const thisMonth = dayObj.month();
    const daysInMonth = dayObj.daysInMonth();

    const dayObjOf1 = dayjs(`${thisYear}-${thisMonth + 1}-1`);
    const weekDayOf1 = dayObjOf1.day();

    const dayObjOfLast = dayjs(`${thisYear}-${thisMonth + 1}-${daysInMonth}`);
    const weekDayOfLast = dayObjOfLast.day();

    const prevMonth = () => {
        setDayObj(dayObj.subtract(1, "month"));
    };

    const nextMonth = () => {
        setDayObj(dayObj.add(1, "month"));
    };

    return (
        <React.Fragment>
            <CalendarContainer className="calendarContainer">
                <div className="header">
                    <button type="button" className="nav nav--prev" onClick={prevMonth}>
                        &lt;
                    </button>
                    <div className="datetime">{dayObj.format("MMM DD YYYY")}</div>
                    <button type="button" className="nav nav--prev" onClick={nextMonth}>
                        &gt;
                    </button>
                </div>
                <DayContainer className="dayContainer">
                    {weekDays.map((day, idx) => (
                        <Day className={day} key={day}>
                            {day}
                        </Day>
                    ))}
                </DayContainer>
                <DateContainer className="dateContainer">
                    {range(weekDayOf1).map((i) => (
                        <Date className="faded" key={i}>
                            {dayObjOf1.subtract(weekDayOf1 - i, "day").date()}
                        </Date>
                    ))}

                    {range(daysInMonth).map((i) => (
                        <Date key={i}>{i + 1}</Date>
                    ))}

                    {range(6 - weekDayOfLast).map((i) => (
                        <Date className="faded" key={i}>
                            {dayObjOfLast.add(i + 1, "day").date()}
                        </Date>
                    ))}
                </DateContainer>
                <Detail />
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
