import React from "react";
import styled from "styled-components";

const Input = (props) => {
    const { type, placeholder, _ref, children } = props;

    if (type === "text") {
        return (
            <React.Fragment>
                <TextInput type="text" placeholder={placeholder} ref={_ref}></TextInput>
            </React.Fragment>
        );
    }

    if (type === "textarea") {
        return (
            <React.Fragment>
                <TextAreaInput type="textarea" placeholder={placeholder} ref={_ref} />
            </React.Fragment>
        );
    }
};

Input.defaultProps = {
    _ref: () => {},
};

const TextInput = styled.input`
    width: 80%;
    font-size: var(--font-medium);
    border: none;
    border-bottom: 2px solid var(--color-light-grey);
    outline: none;
    text-align: center;
`;

const TextAreaInput = styled.textarea`
    width: 80%;
    height: 150px;
    font-size: var(--font-regular);
    border: 2px solid var(--color-light-grey);
    border-radius: var(--size-border-radius);
    resize: none;
    padding: 10px 10px;

    &::-webkit-input-placeholder {
        text-align: center;
        line-height: 120px;
    }
`;

export default Input;
