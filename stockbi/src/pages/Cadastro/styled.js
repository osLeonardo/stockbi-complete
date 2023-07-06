import styled from 'styled-components';

// #1D262D
export const AreaLogin = styled.div`
    background-color: #fff;
    padding: 30px;
    max-width: 100%;
    margin: auto;
    text-align: center;

    h1{
        font-size: 20px;
    }

    form{
        margin-top: -35px;
    }

        .first{
            display: flex;
            flex-direction: row;
        }
    
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

        .footer-login{
            font-size: 14px;

            a{
                font-weight: bold;
                margin-left: 5px;
                color: #7d2ae8;
                transition: 0.4s;
                cursor: pointer;

                &:hover{
                    color: #1D262D;
                }
            }
        }

`;