import styled from "styled-components";
import DatePicker from "react-datepicker";

// Header
const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: var(--color-white);
    height: 80px;
    border-bottom: 2px solid var(--color-black);
`;

const TodayBtn = styled.button`
    border: 1px solid black;
    border-radius: var(--size-border-radius);
    width: 60px;
    height: 40px;
    margin-left: 10px;
`;

const MonthContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
`;

const Current = styled.span`
    font-size: var(--font-medium);
    vertical-align: top;
    margin: 0 20px;
`;

const ChangeMonthBtn = styled.button`
    border: 1px solid black;
    border-radius: var(--size-border-radius);
    width: 60px;
    height: 40px;
`;

const DarkModeBtn = styled.button`
    border: 1px solid black;
    border-radius: var(--size-border-radius);
    width: 60px;
    height: 40px;
    margin-right: 10px;
`;

// Calendar
const CalendarContainer = styled.div`
    height: 85vh;
`;

const DayContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    height: 30px;
    line-height: 30px;
`;

const Day = styled.div`
    text-align: center;
    width: 100%;
    border: 2px solid var(--color-black);
    border-top: none;
    border-right: none;

    &:first-child {
        border-left: 2px solid var(--color-black);
    }

    &:last-child {
        border-right: 2px solid var(--color-black);
    }
`;

const DateContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    height: 100%;
`;

const Date = styled.div`
    width: 100%;
    border: 2px solid var(--color-black);
    border-top: none;
    border-right: none;

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

const ControlBtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 80%;
    right: 2%;
`;

const CalendarBtn = styled.button`
    width: 100px;
    height: 50px;
    border: 1px solid var(--color-black);
    border-radius: var(--size-border-radius);
    background-color: var(--color-white);

    &.upload_btn {
        margin-bottom: 20px;
    }
`;

// Detail
const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 60%;
    height: 60%;
    margin: 0 auto;
    border: 1px solid var(--color-black);
    border-radius: var(--size-border-radius);
    text-align: center;
    background-color: var(--color-white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
`;

const DetailTitle = styled.h1`
    width: 80%;
    font-size: var(--font-large);
`;

const DetailTime = styled.p`
    width: 80%;
    font-size: var(--font-medium);
`;

const DetailContent = styled.p`
    width: 80%;
`;

const DetailBtnContainer = styled.div`
    width: 80%;
`;

const EditBtn = styled.button`
    border: 1px solid black;
    border-radius: var(--size-border-radius);
    width: 90px;
    height: 40px;
    margin-left: 10px;
`;

const DeleteBtn = styled.button`
    border: 1px solid black;
    border-radius: var(--size-border-radius);
    width: 90px;
    height: 40px;
    margin-left: 10px;
`;

const CompleteBtn = styled.button`
    border: 1px solid black;
    border-radius: var(--size-border-radius);
    width: 90px;
    height: 40px;
    margin-left: 10px;
`;

// Upload
const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 60%;
    height: 60%;
    margin: 0 auto;
    border: 1px solid var(--color-black);
    border-radius: var(--size-border-radius);
    text-align: center;
    background-color: var(--color-white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const UploadTitle = styled.input`
    width: 80%;
    font-size: var(--font-medium);
    border: none;
    border-bottom: 2px solid var(--color-light-grey);
    outline: none;
    text-align: center;
`;

const UploadDate = styled(DatePicker)`
    text-align: center;
    font-size: var(--font-medium);
    border: none;
    border-bottom: 2px solid var(--color-light-grey);
    outline: none;
`;

const UploadContent = styled.textarea`
    width: 80%;
    height: 150px;
    font-size: var(--font-regular);
    border: 2px solid var(--color-light-grey);
    border-radius: var(--size-border-radius);
    resize: none;
    padding: 10px 10px;

    &::-webkit-input-placeholder {
        text-align: center;
        line-height: 120px;
    }
`;

const UploadBtn = styled.button`
    border: 1px solid black;
    border-radius: var(--size-border-radius);
    width: 90px;
    height: 40px;
    margin-left: 10px;
`;

export const style = {
    NavBar,
    TodayBtn,
    MonthContainer,
    ChangeMonthBtn,
    Current,
    DarkModeBtn,
    CalendarContainer,
    DayContainer,
    Day,
    DateContainer,
    Date,
    CalendarBtn,
    ControlBtnContainer,
    DetailContainer,
    DetailTitle,
    DetailTime,
    DetailContent,
    DetailBtnContainer,
    EditBtn,
    DeleteBtn,
    CompleteBtn,
    UploadContainer,
    UploadTitle,
    UploadDate,
    UploadContent,
    UploadBtn,
};
