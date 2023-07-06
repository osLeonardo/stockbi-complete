import styled from "styled-components";

export const AreaCadastro = styled.div`
    max-width: 100%;
    text-align: right;

    .form-input {
        text-align: left;
        margin-right: 8px;

        label {
            display: block;
        }

        input {
            margin-bottom: 15px;
            padding: 10px;
            font-size: 14px;
            outline: none;
            border: 2px solid #1D262D;
            border-radius: 5px;
            width: 100%;
            transition: 0.3s;

            &:focus{
                border: 1px solid #7d2ae8;
            }
        }
    }

`;