import React from "react";

import style from "../Styles/Style";

const Detail = () => {
    return (
        <React.Fragment>
            <DetailContainer>
                <DetailTitle>제목</DetailTitle>
                <DetailTime>2021-10-6 4:26</DetailTime>
                <DetailContent>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quod. Officia, eum aliquid quisquam assumenda velit ea voluptatum iste vero, cupiditate, veritatis recusandae
                    ratione numquam reprehenderit eligendi doloremque fugiat molestias.
                </DetailContent>
                <DetailBtnContainer>
                    <EditBtn>Edit</EditBtn>
                    <DeleteBtn>Delete</DeleteBtn>
                    <CompleteBtn>Complete</CompleteBtn>
                </DetailBtnContainer>
            </DetailContainer>
        </React.Fragment>
    );
};

export default Detail;
