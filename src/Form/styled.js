import styled from "styled-components";

export const LabelText = styled.span`
    display: inline-block;
    width: 100%;
    max-width: 150px;
    margin-right: 5px;
`

export const Field = styled.input`
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    max-width: 400px;
    border-radius: 5px;
`

export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: ${({ theme }) => theme.color.green};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        filter: brightness(110%)
    }

    &:active {
        filter: brightness(120%)
    }
`

