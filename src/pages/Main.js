import React from "react";
import { useSelector } from "react-redux";
import Calendar from "../pages/Calendar";
import HeaderBar from "../components/Header";
import DetailModal from "../components/DetailModal";
import UploadModal from "../components/UploadModal";

const Main = () => {
    const modalIsOpen = useSelector((state) => state.modal.is_show);
    const isUpload = useSelector((state) => state.modal.is_upload);

    return (
        <React.Fragment>
            {modalIsOpen && isUpload && <UploadModal />}
            <HeaderBar />
            <Calendar />
            {modalIsOpen && !isUpload && <DetailModal />}
        </React.Fragment>
    );
};

export default Main;
