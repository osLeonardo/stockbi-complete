import styled from "styled-components";

export const AreaListagem = styled.div` 
    width: 100%;
    .con {
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
        border: 1px solid #eeeeee;
        border-radius: 10px;
        
        .nav {
            margin-top: 20px;
            margin-left: 10px;
            width: 100%;

            Form {
                .search{
                    display: flex;
                    flex-direction: row;
                    margin-left: 5px;

                    input {
                        margin-bottom: 15px;
                        padding: 5px;
                        padding-right: 350px;
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
            }

            
        }
        .titleTable{
            // border: 1px solid #eeeeee;
            border-radius: 5px;
            margin-left: 10px;
            margin-right: 10px;
            padding: 5px;

            h3{
                margin-top: 10px;
                margin-bottom: 20px;
                margin-left: 5px;
            }
        }
        
        Table {  
            border: 1px solid #1D262D;
            width: 100%;
        }   
   
    }
    
     

`;