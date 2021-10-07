import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Modal from "react-modal";
import { ModalTitle, ModalTime, ModalContent, ModalBtnContainer, EditBtn, DeleteBtn, CompleteBtn } from "../Styles/Style";

import { actionCreators as scheduleActions } from "../redux/modules/schedule";

const Detail = (props) => {
    const dispatch = useDispatch();

    const modalIsOpen = useSelector((state) => state.schedule.is_open);
    console.log(modalIsOpen);

    const setModalIsOpen = (status) => {
        dispatch(scheduleActions.setModal(status));
    };

    return (
        <React.Fragment>
            <button onClick={() => setModalIsOpen(true)}>Modal Open</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customtStyles}>
                <ModalTitle>제목</ModalTitle>
                <ModalTime>2021-10-6 4:26</ModalTime>
                <ModalContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quod. Officia, eum aliquid quisquam assumenda velit ea voluptatum iste vero, cupiditate, veritatis recusandae
                    ratione numquam reprehenderit eligendi doloremque fugiat molestias.
                </ModalContent>
                <ModalBtnContainer>
                    <EditBtn>Edit</EditBtn>
                    <DeleteBtn>Delete</DeleteBtn>
                    <CompleteBtn>Complete</CompleteBtn>
                </ModalBtnContainer>
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

export default Detail;
