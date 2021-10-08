import React from "react";
import range from "lodash-es/range";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import "dayjs/plugin/weekday";
import Date from "./Date";
import { actionCreators as modalActions } from "../redux/modules/modal";
import { CalendarContainer, DayContainer, DateContainer, Day, ControlBtnContainer, CalendarBtn } from "../Styles/Style";

const Calendar = () => {
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const dispatch = useDispatch();

    const dayObj = useSelector((state) => state.date.date);
    const todayObj = useSelector((state) => state.date.now);
    const newSchedule = useSelector((state) => state.schedule.schedule);

    const todayYear = todayObj.get("year");
    const todayMonth = todayObj.get("month");
    const todayDate = todayObj.get("date");
    const today = dayObj.clone().year(todayYear).month(todayMonth).date(todayDate);

    const currentYear = dayObj.year();
    const currentMonth = dayObj.month();
    const daysCurrentMonth = dayObj.daysInMonth();

    const dayObjPrevMonth = dayjs(`${currentYear}-${currentMonth + 1}-1`);
    const daysPrevMonth = dayObjPrevMonth.day();

    const dayObjNextMonth = dayjs(`${currentYear}-${currentMonth + 1}-${daysCurrentMonth}`);
    const daysNextMonth = dayObjNextMonth.day();

    const _showModal = (is_upload) => dispatch(modalActions.showModal(is_upload));

    const dateId = `${dayObj.get("year")}-${dayObj.get("month") + 1}`;
    const PrevdateId = `${dayObjPrevMonth.get("year")}-${dayObjPrevMonth.get("month")}`;
    const NextdateId = `${dayObjNextMonth.get("year")}-${dayObjNextMonth.get("month") + 2}`;

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
                        <Date className="faded" key={i} id={`${PrevdateId}-${dayObjPrevMonth.subtract(daysPrevMonth - i, "day").date()}`}>
                            {dayObjPrevMonth.subtract(daysPrevMonth - i, "day").date()}
                        </Date>
                    ))}
                    {range(daysCurrentMonth).map((i) => (
                        <Date key={i} className={"date" + (i + 1)} id={`${dateId}-${i + 1}`}>
                            {i + 1}
                        </Date>
                    ))}

                    {range(6 - daysNextMonth).map((i) => (
                        <Date className="faded" key={i} id={`${NextdateId}-${dayObjNextMonth.add(i + 1, "day").date()}`}>
                            {dayObjNextMonth.add(i + 1, "day").date()}
                        </Date>
                    ))}
                </DateContainer>
                <ControlBtnContainer>
                    <CalendarBtn className="upload_btn" onClick={() => _showModal(true)}>
                        추가하기
                    </CalendarBtn>
                    <CalendarBtn className="complete_check_btn">완료된 일정 보기</CalendarBtn>
                </ControlBtnContainer>
            </CalendarContainer>
        </React.Fragment>
    );
};

export default Calendar;
