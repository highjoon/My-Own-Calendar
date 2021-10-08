import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as modalActions } from "../redux/modules/modal";
import Schedule from "../elements/Schedule";
import { DateBox, DateEach } from "../Styles/Style";

const Date = (props) => {
    const dispatch = useDispatch();
    const { className, thisDate, children } = props;
    const _thisDate = thisDate
        .split("-")
        .map((x) => Number(x))
        .join("-");

    const scheduleList = useSelector((state) => state.schedule.scheduleList);

    let currentId = scheduleList.find((schedule) => schedule.date.join("-") === thisDate);
    currentId ? (currentId = currentId.id) : (currentId = "");

    const _showModal = (is_upload, date) => dispatch(modalActions.showModal(is_upload, date));

    return (
        <React.Fragment>
            <DateBox className={className} id={_thisDate}>
                <DateEach>{children}</DateEach>
                {scheduleList.map((schedule, idx) => {
                    if (schedule.date.join("-") === thisDate) {
                        return (
                            <Schedule key={idx} id={currentId} _onClick={() => _showModal(false, thisDate)}>
                                {schedule.is_complete ? `(완)${schedule.title}` : `(미완)${schedule.title}`}
                            </Schedule>
                        );
                    }
                })}
            </DateBox>
        </React.Fragment>
    );
};

export default Date;
