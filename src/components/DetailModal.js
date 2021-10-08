import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { actionCreators as modalActions } from "../redux/modules/modal";
import { actionCreators as scheduleActions } from "../redux/modules/schedule";
import { DetailTitle, DetailTime, DetailContent, DetailBtnContainer, DeleteBtn, CompleteBtn, ModalStyles } from "../Styles/Style";

const DetailModal = (props) => {
    const dispatch = useDispatch();
    const modalIsOpen = useSelector((state) => state.modal.is_show);
    const scheduleList = useSelector((state) => state.schedule.scheduleList);
    const thisDateId = useSelector((state) => state.modal.id);

    let currentId = scheduleList.find((schedule) => schedule.id === thisDateId).id;

    const _closeModal = () => dispatch(modalActions.closeModal());

    const deleteSchedule = () => {
        dispatch(scheduleActions.deleteScheduleFB(currentId));
        dispatch(modalActions.closeModal());
    };

    const completeSchedule = () => {
        dispatch(scheduleActions.completeScheduleFB(currentId));
        dispatch(modalActions.closeModal());
    };

    const target = scheduleList.find((schedule) => {
        return schedule.id === thisDateId;
    });

    const targetObj = {
        year: target.date[0],
        month: target.date[1],
        date: target.date[2],
        hour: parseInt(String(target.dateWithTime).slice(-4, -2)),
        minutes: parseInt(String(target.dateWithTime).slice(-2)),
        isComplete: target.is_complete,
    };

    return (
        <React.Fragment>
            <Modal isOpen={modalIsOpen} onRequestClose={_closeModal} style={ModalStyles}>
                <DetailTitle>{targetObj.isComplete ? `(완료됨) ${target.title}` : `(미완료) ${target.title}`}</DetailTitle>
                <DetailTime>{`${targetObj.year}년 ${targetObj.month}월 ${targetObj.date}일 ${targetObj.hour}시 ${targetObj.minutes}분`}</DetailTime>
                <DetailContent>{target.desc}</DetailContent>
                <DetailBtnContainer>
                    <DeleteBtn onClick={deleteSchedule}>삭제</DeleteBtn>
                    <CompleteBtn onClick={completeSchedule}>{targetObj.isComplete ? "취소" : "완료"}</CompleteBtn>
                </DetailBtnContainer>
            </Modal>
        </React.Fragment>
    );
};

export default DetailModal;
