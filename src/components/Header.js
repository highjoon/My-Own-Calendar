import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as dateActions } from "../redux/modules/date";
import styled from "styled-components";
import { Button } from "../elements";

const HeaderBar = (props) => {
    const dispatch = useDispatch();

    const dayObj = useSelector((state) => state.date.date);
    const todayObj = useSelector((state) => state.date.now);

    const prevMonth = () => dispatch(dateActions.setDate(dayObj.clone().subtract(1, "month")));
    const nextMonth = () => dispatch(dateActions.setDate(dayObj.clone().add(1, "month")));
    const moveToday = () => {
        const todayYear = todayObj.get("year");
        const todayMonth = todayObj.get("month");
        const todayDate = todayObj.get("date");
        const today = dayObj.clone().year(todayYear).month(todayMonth).date(todayDate);
        dispatch(dateActions.setDate(today));
    };

    return (
        <React.Fragment>
            <NavBar className="navbar">
                <Button _onClick={moveToday} text="Today" />
                <MonthContainer>
                    <Button className="prev" text="Prev" _onClick={prevMonth} />
                    <Current className="current">{dayObj.format("MMM YYYY")}</Current>
                    <Button className="next" text="Next" _onClick={nextMonth} />
                </MonthContainer>
            </NavBar>
        </React.Fragment>
    );
};

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    background-color: var(--color-white);
    border-bottom: 2px solid var(--color-black);
`;

const MonthContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;

    ${({ theme }) => theme.device.tablet} {
        width: 400px;
    }

    ${({ theme }) => theme.device.mobile} {
        width: 250px;
    }
`;

const Current = styled.span`
    font-size: var(--font-medium);
    margin: 0 20px;

    ${({ theme }) => theme.device.tablet} {
        font-size: var(--font-regular);
        margin: 0 10px;
    }

    ${({ theme }) => theme.device.mobile} {
        font-size: var(--font-small);
        margin: 0 5px;
    }
`;

export default HeaderBar;
