import React from "react";
import range from "lodash-es/range";
import { useSelector, useDispatch } from "react-redux";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import "dayjs/plugin/weekday";
import { actionCreators as modalActions } from "../redux/modules/modal";
import { CalendarContainer, DayContainer, DateContainer, Date, Day, ControlBtnContainer, CalendarBtn } from "../Styles/Style";

const Calendar = () => {
    const dispatch = useDispatch();

    const _showModal = (is_upload) => {
        dispatch(modalActions.showModal(is_upload));
    };

    const dayObj = useSelector((state) => state.date.date);
    const todayObj = useSelector((state) => state.date.now);
    const newSchedule = useSelector((state) => state.schedule.schedule);

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
                    <CalendarBtn className="upload_btn" onClick={() => _showModal(true)}>
                        추가하기
                    </CalendarBtn>
                    <CalendarBtn className="complete_check_btn">완료된 일정 보기</CalendarBtn>
                </ControlBtnContainer>
                <button onClick={() => _showModal(false)}>Modal Open</button>
            </CalendarContainer>
        </React.Fragment>
    );
};

export default Calendar;
