import React from "react";
import styled from "styled-components";

const Schedule = (props) => {
    const { id, _onClick, children } = props;

    return (
        <React.Fragment>
            <ScheduleBtn id={id} onClick={_onClick}>
                {children}
            </ScheduleBtn>
        </React.Fragment>
    );
};

const ScheduleBtn = styled.button`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 3px 3px;
    margin-bottom: 3px;
    border-radius: 5px;
    color: var(--color-black);
    background-color: var(--color-white);
    font-size: var(--font-micro);
    white-space: nowrap;
    overflow: hidden;
`;

export default Schedule;
