import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as modalActions } from "../redux/modules/modal";
import Schedule from "../elements/Schedule";
import { DateBox, DateEach } from "../Styles/Style";

const Date = (props) => {
    const dispatch = useDispatch();
    const { className, thisDate, children } = props;
    const scheduleList = useSelector((state) => state.schedule.scheduleList);
    const mode = useSelector((state) => state.schedule.mode);
    const showModal = (is_upload, id) => dispatch(modalActions.showModal(is_upload, id));

    return (
        <React.Fragment>
            <DateBox className={className}>
                <DateEach>{children}</DateEach>
                {scheduleList
                    .slice()
                    .sort((a, b) => a.dateWithTime - b.dateWithTime)
                    .map((schedule, idx) => {
                        if (schedule.date.join("-") === thisDate) {
                            if (mode === "completed" && !schedule.is_complete) return;

                            const hour = parseInt(String(schedule.dateWithTime).slice(-4, -2));
                            const minutes = parseInt(String(schedule.dateWithTime).slice(-2));

                            return (
                                <Schedule key={idx} id={schedule.id} _onClick={() => showModal(false, schedule.id)}>
                                    {schedule.is_complete ? `✅ ${hour}:${minutes} ${schedule.title}` : `${hour}:${minutes} ${schedule.title}`}
                                </Schedule>
                            );
                        }
                    })}
            </DateBox>
        </React.Fragment>
    );
};

export default Date;
