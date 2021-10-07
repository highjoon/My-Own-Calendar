import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { actionCreators as scheduleActions } from "../redux/modules/schedule";
import { actionCreators as modalActions } from "../redux/modules/modal";
import { DetailTitle, DetailTime, DetailContent, DetailBtnContainer, EditBtn, DeleteBtn, CompleteBtn, ModalStyles } from "../Styles/Style";

const DetailModal = (props) => {
    const dispatch = useDispatch();
    const modalIsOpen = useSelector((state) => state.modal.is_show);

    const _closeModal = () => {
        dispatch(modalActions.closeModal());
    };

    const newSchedule = useSelector((state) => state.schedule.schedule);

    return (
        <React.Fragment>
            <Modal isOpen={modalIsOpen} onRequestClose={_closeModal} style={ModalStyles}>
                <DetailTitle>{newSchedule ? newSchedule.title : ""}</DetailTitle>
                <DetailTime>{newSchedule ? `${newSchedule.date[0]}년 ${newSchedule.date[1]}월 ${newSchedule.date[2]}일` : ""}</DetailTime>
                <DetailContent>{newSchedule ? newSchedule.desc : ""}</DetailContent>
                <DetailBtnContainer>
                    <EditBtn>Edit</EditBtn>
                    <DeleteBtn>Delete</DeleteBtn>
                    <CompleteBtn>Complete</CompleteBtn>
                </DetailBtnContainer>
            </Modal>
        </React.Fragment>
    );
};

export default DetailModal;
