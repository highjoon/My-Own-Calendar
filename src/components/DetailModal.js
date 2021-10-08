import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { actionCreators as modalActions } from "../redux/modules/modal";
import { DetailTitle, DetailTime, DetailContent, DetailBtnContainer, EditBtn, DeleteBtn, CompleteBtn, ModalStyles } from "../Styles/Style";

const DetailModal = (props) => {
    const dispatch = useDispatch();
    const modalIsOpen = useSelector((state) => state.modal.is_show);
    const currentId = useSelector((state) => state.modal.id);
    const newSchedule = useSelector((state) => state.schedule.scheduleList);

    const _closeModal = () => dispatch(modalActions.closeModal());

    const target = newSchedule.filter((schedule) => {
        return schedule.date.join("-") === currentId;
    });

    return (
        <React.Fragment>
            <Modal isOpen={modalIsOpen} onRequestClose={_closeModal} style={ModalStyles}>
                <DetailTitle>{target[0].title}</DetailTitle>
                <DetailTime>{`${target[0].date[0]}년 ${target[0].date[1]}월 ${target[0].date[2]}일`}</DetailTime>
                <DetailContent>{target[0].desc}</DetailContent>
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
