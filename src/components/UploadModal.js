import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import ko from "date-fns/esm/locale/ko";
import "react-datepicker/dist/react-datepicker.css";
import { actionCreators as modalActions } from "../redux/modules/modal";
import { actionCreators as scheduleActions } from "../redux/modules/schedule";
import { Button, Input, ModalStyles } from "../elements";

const UploadModal = (props) => {
    const dispatch = useDispatch();

    const modalIsOpen = useSelector((state) => state.modal.is_show);

    const [startDate, setStartDate] = useState(null);

    let scheduleTitle = useRef();
    let scheduleDate = useRef();
    let scheduleDesc = useRef();

    const _closeModal = () => dispatch(modalActions.closeModal());
    const createNewSchedule = () => {
        let newTitle = scheduleTitle.current.value;
        let newDate = scheduleDate.current.input.value
            .split(" ")
            .map((x) => Number(x.substring(0, x.length - 1)))
            .slice(0, 3);
        let newDateWithTimes = scheduleDate.current.input.value
            .split(" ")
            .map((x) => x.substring(0, x.length - 1))
            .reduce((a, b) => a + b);
        let newDesc = scheduleDesc.current.value;

        if (!newTitle || newDate.length === 1 || !newDesc) {
            window.alert("모든 항목을 입력해주세요!");
            return;
        }

        const newObj = {
            title: newTitle,
            date: newDate,
            dateWithTime: parseInt(newDateWithTimes),
            desc: newDesc,
            is_complete: false,
        };

        dispatch(scheduleActions.addScheduleFB(newObj));
        dispatch(modalActions.closeModal());
    };

    return (
        <React.Fragment>
            <Modal isOpen={modalIsOpen} onRequestClose={_closeModal} style={ModalStyles}>
                <Input type="text" placeholder="제목 추가" _ref={scheduleTitle} />
                <UploadDate
                    placeholderText="날짜를 선택해주세요." //
                    onChange={(date) => setStartDate(date)}
                    selected={startDate}
                    locale={ko}
                    showTimeSelect
                    timeIntervals={15}
                    timeInputLabel="Time:"
                    dateFormat="yyyy년 MM월 dd일 hh시 mm분"
                    ref={scheduleDate}
                />
                <Input type="textarea" placeholder="설명 추가" _ref={scheduleDesc} />
                <Button className="upload" text="Upload" _onClick={createNewSchedule} />
            </Modal>
        </React.Fragment>
    );
};

const UploadDate = styled(DatePicker)`
    width: 80%;
    text-align: center;
    font-size: var(--font-regular);
    outline: none;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid var(--color-light-grey);
    padding: 10px 10px;
`;

export default UploadModal;
