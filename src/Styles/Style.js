import styled from "styled-components";

// Calendar
export const CalendarContainer = styled.div`
    height: 85vh;
`;

export const DayContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    height: 30px;
    line-height: 30px;
    border-bottom: 2px solid var(--color-black);
`;

export const Day = styled.div`
    text-align: center;
    width: 100%;
    border-left: 2px solid var(--color-black);

    &:first-child {
        border-left: 2px solid var(--color-black);
    }

    &:last-child {
        border-right: 2px solid var(--color-black);
    }
`;

export const DateContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    height: 100%;
`;

export const ControlBtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 80%;
    right: 2%;
`;

// Modal
export const ModalStyles = {
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "50%",
        height: "60%",
        margin: "0 auto",
        border: "1px solid var(--color-black)",
        borderRadius: "var(--size-border-radius)",
        textAlign: "center",
        backgroundColor: "var(--color-white)",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
};
