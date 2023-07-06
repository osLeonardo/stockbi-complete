import styled from 'styled-components';

export const AreaHeader = styled.div`
    .header{
        height: 60px;
        background-color: #1D262D;
        color: #fff;
        width: 100vw;
    
        .container{
            padding: 5px 20px;
            display: flex;
            align-items: center; 
        }   
            .logo{
                flex: 1;
                margin-top: -30px;

                img{
                    width: 170px;
                }
            }

            nav{
                ul{
                    display: flex;
                    justify-content: space-between;
                    margin-top: -20px;
                }
                    li{
                        list-style: none;
                        margin-left: 19px;
                        display: flex;
                        align-items: center;

                        a{
                            text-decoration: none;
                            font-weight: bold;
                            cursor: pointer;
                            transition: .5s;
                            padding: .5em .8em;
                            border-radius: 5px;
                            color: white;
                            background: transparent;
                        }

                        a:hover{
                            background: #b4c0ca;
                            color: #1D262D;
                        }
                    }
            }
    }
    .items{
        height: 40px;
        background-color: #eeeeee;
        color: #1D262D;

        .container{
            padding: 5px 20px;
            display: flex;
            align-items: center; 
        }

            nav{
                ul{
                    display: flex;
                    align-items: center; 
                }
                    li{
                        list-style: none;
                        margin-left: 50px;
                        display: flex;
                        align-items: center;

                        a{
                            text-decoration: none;
                            color: #1D262D;
                        
                            &:hover{
                                color: #1f3346;
                            }
                        }
                    }
            }
    }

`;