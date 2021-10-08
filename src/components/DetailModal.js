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

    return (
        <React.Fragment>
            <Modal isOpen={modalIsOpen} onRequestClose={_closeModal} style={ModalStyles}>
                <DetailTitle>{target.title}</DetailTitle>
                <DetailTime>{`${target.date[0]}년 ${target.date[1]}월 ${target.date[2]}일`}</DetailTime>
                <DetailContent>{target.desc}</DetailContent>
                <DetailBtnContainer>
                    <DeleteBtn onClick={deleteSchedule}>Delete</DeleteBtn>
                    <CompleteBtn onClick={completeSchedule}>Complete</CompleteBtn>
                </DetailBtnContainer>
            </Modal>
        </React.Fragment>
    );
};

export default DetailModal;
