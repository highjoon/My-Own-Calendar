import React, { useState } from "react";
import { ko } from "date-fns/esm/locale";
import { UploadContainer, UploadTitle, UploadDate, UploadContent, UploadBtn } from "../Styles/Style";

const Upload = () => {
    const [startDate, setStartDate] = useState(null);
    const updateDate = (value) => {
        console.log(value);
    };

    return (
        <React.Fragment>
            <UploadContainer>
                <UploadTitle type="text" placeholder="제목 추가" />
                <UploadDate
                    placeholderText="날짜를 선택해주세요."
                    onChange={(date) => {
                        setStartDate(date);
                        updateDate(date);
                    }}
                    selected={startDate}
                    locale={ko}
                    dateFormat="yyyy년 MM월 dd일"
                />
                <UploadContent placeholder="설명 추가" />
                <UploadBtn>Upload</UploadBtn>
            </UploadContainer>
        </React.Fragment>
    );
};

export default Upload;
