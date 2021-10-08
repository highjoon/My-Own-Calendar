import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators as modalActions } from "../redux/modules/modal";

import Schedule from "../elements/Schedule";
import { DateBox, DateEach } from "../Styles/Style";

const Date = (props) => {
    const dispatch = useDispatch();
    const { className, id, children } = props;
    const currentId = id
        .split("-")
        .map((x) => Number(x))
        .join("-");
    const scheduleList = useSelector((state) => state.schedule.scheduleList);
    const _showModal = (is_upload, currentId) => dispatch(modalActions.showModal(is_upload, currentId));

    return (
        <React.Fragment>
            <DateBox className={className} id={id}>
                <DateEach>{children}</DateEach>
                {scheduleList.map((schedule, idx) => {
                    if (schedule.date.join("-") === currentId) {
                        return (
                            <Schedule key={idx} id={currentId} _onClick={() => _showModal(false, currentId)}>
                                {schedule.title}
                            </Schedule>
                        );
                    }
                })}
            </DateBox>
        </React.Fragment>
    );
};

export default Date;
