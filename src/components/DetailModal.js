import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "react-modal";
import { DetailTitle, DetailTime, DetailContent, DetailBtnContainer, EditBtn, DeleteBtn, CompleteBtn } from "../Styles/Style";

import { actionCreators as scheduleActions } from "../redux/modules/schedule";
import { actionCreators as modalActions } from "../redux/modules/modal";

const DetailModal = (props) => {
    const dispatch = useDispatch();
    const modalIsOpen = useSelector((state) => state.modal.is_show);

    const _closeModal = () => {
        dispatch(modalActions.closeModal());
    };

    const newSchedule = useSelector((state) => state.schedule.schedule);

    return (
        <React.Fragment>
            <Modal isOpen={modalIsOpen} onRequestClose={_closeModal} style={customtStyles}>
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

export default DetailModal;
