import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { _onClick, is_rect, border, borderRadius, width, height, fontSize, text, children, className } = props;

    if (is_rect) {
        return (
            <React.Fragment>
                <RectButton className={className} onClick={_onClick}>
                    {text ? text : children}
                </RectButton>
            </React.Fragment>
        );
    }

    const styles = {
        border,
        borderRadius,
        width,
        height,
        fontSize,
    };

    return (
        <React.Fragment>
            <DefaultButton {...styles} className={className} onClick={_onClick}>
                {text ? text : children}
            </DefaultButton>
        </React.Fragment>
    );
};

Button.defaultProps = {
    _onClick: () => {},
    border: false,
    borderRadius: false,
    width: null,
    height: null,
    fontSize: null,
    text: false,
    children: null,
};

const DefaultButton = styled.button`
    width: 60px;
    height: 40px;
    background-color: var(--color-light-yellow);
    color: var(--color-black);
    font-size: ${(props) => props.fontSize};
    border: 1px solid black;
    border-radius: var(--size-border-radius);
    margin: 0 20px;

    ${({ theme }) => theme.device.tablet} {
        font-size: 7px;
        width: 40px;
        height: 30px;
    }
`;

const RectButton = styled.button`
    width: 100px;
    height: 50px;
    border: 1px solid var(--color-black);
    border-radius: var(--size-border-radius);
    background-color: var(--color-light-yellow);

    &.upload_btn {
        margin-bottom: 20px;
    }

    ${({ theme }) => theme.device.tablet} {
        width: 60px;
        height: 40px;
    }
`;

export default Button;
