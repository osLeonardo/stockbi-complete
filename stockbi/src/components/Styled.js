import styled from "styled-components";

export const BtnDefaultIcons = styled.button`
    display: flex;
    align-items: center;
    padding: 5px;
    width: 40px;
    border-radius: 5px;
    border: 1px solid #1D262D;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    // margin-top: -3px;
    margin-left: 5px;
    transition: 0.4s;
    
    &:hover{
        background-color: #ccc;
    }

    .center {
        text-align: center;
        width: 100%;
    }
`;

export const BtnDefault = styled(BtnDefaultIcons)`
    background-color: #1D262D;
    color: #b4c0ca;
    display: inline;
    border: 1px solid #1D262D;
    width: 100%;
    padding: 10px;
    border: 2px solid #1D262D;

    &:hover{
        background-color: #1f3346;
        color: #fff;
    }
`;

export const BtnDefaultCancel = styled(BtnDefault)`
    background-color: #717D7E ;
    border: 1px solid #717D7E ;
    color: white;
    display: inline;
    width: 30%;
    margin-right: 8px;

    &:hover{
        background-color: #839192;
    }

`;

export const BtnDefaultSave = styled(BtnDefault)`
    background-color: #386723;
    border: 1px solid #386723;
    color: white;
    display: inline;
    width: 40%;

    &:hover{
        background-color: green;
    }

`;