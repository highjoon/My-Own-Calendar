import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as modalActions } from "../redux/modules/modal";
import styled from "styled-components";
import { Schedule } from "../elements";

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

                            const hour = String(schedule.dateWithTime).slice(-4, -2);
                            const minutes = String(schedule.dateWithTime).slice(-2);

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

const DateBox = styled.div`
    border: 2px solid var(--color-black);
    border-top: none;
    border-right: none;
    white-space: nowrap;
    overflow: hidden;

    &:nth-child(7n) {
        border-right: 2px solid var(--color-black);
    }

    &:nth-child(1n) {
        border-left: 2px solid var(--color-black);
    }

    &.faded {
        color: var(--color-light-grey);
    }
`;

const DateEach = styled.div`
    width: 100%;
    text-align: center;
    font-size: var(--font-regular);
`;

export default Date;
