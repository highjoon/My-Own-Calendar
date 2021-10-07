import React, { useState, useRef } from "react";
import { UploadContainer, UploadTitle, UploadDate, UploadContent, UploadBtn } from "../Styles/Style";

import "react-datepicker/dist/react-datepicker.css";

import ko from "date-fns/esm/locale/ko";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { actionCreators as scheduleActions } from "../redux/modules/schedule";

const Upload = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const schedule = useSelector((state) => state.schedule.schedule);

    const scheduleTitle = useRef();
    const scheduleDate = useRef();
    const scheduleDesc = useRef();

    const [startDate, setStartDate] = useState(null);
    const createNewSchedule = () => {
        const newTitle = scheduleTitle.current.value;
        const newDate = scheduleDate.current.input.value.split(" ").map((x) => Number(x.substring(0, x.length - 1)));
        const newDesc = scheduleDesc.current.value;
        const newObj = {
            title: newTitle,
            date: newDate,
            desc: newDesc,
        };
        dispatch(scheduleActions.setSchedule(newObj));
        history.push("/");
    };

    return (
        <React.Fragment>
            <UploadContainer>
                <UploadTitle type="text" placeholder="제목 추가" ref={scheduleTitle} />
                <UploadDate
                    placeholderText="날짜를 선택해주세요."
                    onChange={(date) => {
                        setStartDate(date);
                    }}
                    selected={startDate}
                    locale={ko}
                    dateFormat="yyyy년 MM월 dd일"
                    ref={scheduleDate}
                />
                <UploadContent placeholder="설명 추가" ref={scheduleDesc} />
                <UploadBtn onClick={createNewSchedule}>Upload</UploadBtn>
            </UploadContainer>
        </React.Fragment>
    );
};

export default Upload;
