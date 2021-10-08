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
    const todayData = useSelector((state) => state.date.now);

    const todayObj = {
        year: todayData.get("year"),
        month: todayData.get("month"),
        date: todayData.get("date"),
        today: dayjs().year(todayData.get("year")).month(todayData.get("month")).date(todayData.get("date")),
    };

    const currentDayObj = {
        year: dayObj.year(),
        month: dayObj.month(),
        days: dayObj.daysInMonth(),
    };

    const dateId = `${currentDayObj.year}-${currentDayObj.month + 1}`;

    const dayObjPrevMonth = dayjs(`${currentDayObj.year}-${currentDayObj.month + 1}-1`);
    const daysPrevMonth = dayObjPrevMonth.day();
    const PrevdateId = `${dayObjPrevMonth.get("year")}-${dayObjPrevMonth.get("month")}`;

    const dayObjNextMonth = dayjs(`${currentDayObj.year}-${currentDayObj.month + 1}-${currentDayObj.days}`);
    const daysNextMonth = dayObjNextMonth.day();
    const NextdateId = `${dayObjNextMonth.get("year")}-${dayObjNextMonth.get("month") + 2}`;

    const _showModal = (is_upload) => dispatch(modalActions.showModal(is_upload));

    React.useEffect(() => {
        const targetDate = document.querySelector(".date" + todayObj.today.date());
        if (dayObj.year() === todayObj.year && dayObj.month() === todayObj.month && dayObj.date() === todayObj.date) {
            targetDate.style.background = "var(--color-light-yellow)";
        } else {
            targetDate.style.background = "var(--color-white)";
        }
    });

    return (
        <React.Fragment>
            <CalendarContainer className="calendarContainer">
                <DayContainer className="dayContainer">
                    {weekDays.map((day) => {
                        return (
                            <Day className={day} key={day}>
                                {day}
                            </Day>
                        );
                    })}
                </DayContainer>
                <DateContainer className="dateContainer">
                    {range(daysPrevMonth).map((i) => (
                        <Date className="faded" key={i} thisDate={`${PrevdateId}-${dayObjPrevMonth.subtract(daysPrevMonth - i, "day").date()}`}>
                            {dayObjPrevMonth.subtract(daysPrevMonth - i, "day").date()}
                        </Date>
                    ))}
                    {range(currentDayObj.days).map((i) => (
                        <Date key={i} className={"date" + (i + 1)} thisDate={`${dateId}-${i + 1}`}>
                            {i + 1}
                        </Date>
                    ))}

                    {range(6 - daysNextMonth).map((i) => (
                        <Date className="faded" key={i} thisDate={`${NextdateId}-${dayObjNextMonth.add(i + 1, "day").date()}`}>
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
