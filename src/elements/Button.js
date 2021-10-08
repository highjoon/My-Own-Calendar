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
    border: 1px solid var(--color-black);
    border-radius: var(--size-border-radius);
    margin: 0 20px;
    font-weight: var(--weight-bold);
    color: var(--color-white);

    &.today {
        width: 110px;
        border: 1px solid var(--color-dark-pink);
        background-color: var(--color-dark-pink);

        ${({ theme }) => theme.device.tablet} {
            width: 50px;
        }
    }

    &.prev,
    &.next {
        border: 1px solid var(--color-green);
        background-color: var(--color-green);
    }

    ${({ theme }) => theme.device.tablet} {
        font-size: 7px;
        width: 40px;
        height: 30px;
    }

    &.upload {
        width: 110px;
        border: 1px solid var(--color-light-cyan);
        background-color: var(--color-light-cyan);
    }

    &.detailBtn {
        width: 110px;
        border: 1px solid var(--color-crimson);
        background-color: var(--color-crimson);
    }
`;

const RectButton = styled.button`
    width: 110px;
    height: 50px;
    border: 1px solid var(--color-light-orange);
    border-radius: 20px;
    background-color: var(--color-light-orange);
    font-size: var(--font-small);
    font-weight: var(--weight-bold);
    color: var(--color-white);

    &.upload_btn {
        background-color: var(--color-blue);
        border: 1px solid var(--color--blue);
        color: var(--color-white);
        margin-bottom: 20px;
    }

    ${({ theme }) => theme.device.tablet} {
        width: 70px;
        height: 40px;
        font-size: var(--font-micro);
        font-weight: var(--weight-regular);
    }
`;

export default Button;
