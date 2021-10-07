import React, { useState, useRef } from "react";
import { UploadContainer, UploadTitle, UploadDate, UploadContent, UploadBtn } from "../Styles/Style";

import Modal from "react-modal";

import "react-datepicker/dist/react-datepicker.css";

import ko from "date-fns/esm/locale/ko";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators as modalActions } from "../redux/modules/modal";
import { actionCreators as scheduleActions } from "../redux/modules/schedule";

const UploadModal = (props) => {
    const dispatch = useDispatch();

    const modalIsOpen = useSelector((state) => state.modal.is_show);
    const schedule = useSelector((state) => state.schedule.schedule);

    const [startDate, setStartDate] = useState(null);

    const scheduleTitle = useRef();
    const scheduleDate = useRef();
    const scheduleDesc = useRef();

    const _closeModal = () => {
        dispatch(modalActions.closeModal());
    };

    const createNewSchedule = () => {
        const newTitle = scheduleTitle.current.value;
        const newDate = scheduleDate.current.input.value.split(" ").map((x) => Number(x.substring(0, x.length - 1)));
        const newDesc = scheduleDesc.current.value;

        const newObj = { title: newTitle, date: newDate, desc: newDesc };

        dispatch(scheduleActions.setSchedule(newObj));
    };

    return (
        <React.Fragment>
            <Modal isOpen={modalIsOpen} onRequestClose={_closeModal} style={customtStyles}>
                <UploadTitle type="text" placeholder="제목 추가" ref={scheduleTitle} />
                <UploadDate
                    placeholderText="날짜를 선택해주세요." //
                    onChange={(date) => setStartDate(date)}
                    selected={startDate}
                    locale={ko}
                    dateFormat="yyyy년 MM월 dd일"
                    ref={scheduleDate}
                />
                <UploadContent placeholder="설명 추가" ref={scheduleDesc} />
                <UploadBtn onClick={(createNewSchedule, _closeModal)}>Upload</UploadBtn>
            </Modal>
        </React.Fragment>
    );
};

const customtStyles = {
    content: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "60%",
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

export default UploadModal;
