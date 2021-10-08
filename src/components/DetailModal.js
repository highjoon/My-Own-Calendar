import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import styled from "styled-components";
import { actionCreators as modalActions } from "../redux/modules/modal";
import { actionCreators as scheduleActions } from "../redux/modules/schedule";
import { Button, ModalStyles } from "../elements";

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
        hour: String(target.dateWithTime).slice(-4, -2),
        minutes: String(target.dateWithTime).slice(-2),
        isComplete: target.is_complete,
    };
    console.log(targetObj);

    return (
        <React.Fragment>
            <Modal isOpen={modalIsOpen} onRequestClose={_closeModal} style={ModalStyles}>
                <DetailContainer>
                    <DetailTitle>{targetObj.isComplete ? `✅ ${target.title}` : `${target.title}`}</DetailTitle>
                    <DetailTime>{`${targetObj.year}년 ${targetObj.month}월 ${targetObj.date}일 ${targetObj.hour}시 ${targetObj.minutes}분`}</DetailTime>
                    <DetailContent>{target.desc}</DetailContent>
                    <DetailBtnContainer>
                        <Button className="detailBtn" text="삭제" _onClick={deleteSchedule} />
                        <Button className="detailBtn" text={targetObj.isComplete ? "취소" : "완료"} _onClick={completeSchedule} />
                    </DetailBtnContainer>
                </DetailContainer>
            </Modal>
        </React.Fragment>
    );
};

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 80%;
    margin: 0 auto;
    text-align: center;
    background-color: var(--color-white);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const DetailTitle = styled.h1`
    width: 100%;
    font-size: var(--font-medium);

    ${({ theme }) => theme.device.tablet} {
        width: 50%;
        font-size: var(--font-regular);
    }

    ${({ theme }) => theme.device.mobile} {
        width: 20%;
        font-size: var(--font-small);
    }
`;

const DetailTime = styled.p`
    width: 80%;
    font-size: var(--font-regular);

    ${({ theme }) => theme.device.tablet} {
        font-size: var(--font-small);
    }

    ${({ theme }) => theme.device.mobile} {
        font-size: var(--font-micro);
    }
`;

const DetailContent = styled.p`
    width: 80%;

    font-size: var(--font-medium);

    ${({ theme }) => theme.device.tablet} {
        font-size: var(--font-regular);
    }

    ${({ theme }) => theme.device.mobile} {
        font-size: var(--font-small);
    }
`;

const DetailBtnContainer = styled.div`
    width: 100%;
`;

export default DetailModal;
