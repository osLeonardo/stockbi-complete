import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import { AreaListagem } from "./styled";
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import { BtnDefault, BtnDefaultIcons } from "../../../components/Styled";
import CategoryIcon from '@mui/icons-material/Category';
import { useNavigate } from "react-router-dom";
import { api } from "../../../services/api"

export const Categorias = () =>{
    const navigate = useNavigate();
    const [data, setData] = useState([]);   
    const [inputValue, setInputValue] = useState();
    const [originalData, setOriginalData] = useState([]);

    useEffect( (data) => {
        const fetchData = async () => {
          try{
            const requestData = await api.get('/category/find-all');
            setOriginalData(requestData.data.categories);
            setData(requestData.data.categories);
          }catch(err){}

        }
        fetchData(data)
    }, []);

    const handleRedirect = () => {
        navigate("/categoria");
      };  

    function handleInput(e){
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(searchTable(inputValue));
    }

    function searchTable(value){
        const filteredData = [];

        if (value.length === 0) {
            return originalData; 
        }

        for (let i = 0; i < data.length; ++i) {
            const newValue = value.toLowerCase();

            const description = data[i].description.toLowerCase();

            if (description.includes(newValue)) {
                filteredData.push(data[i]);
            }
        }
        return filteredData;
    }

    return (
        <AreaListagem>
            <div className="con">
                <div className="nav">
                    <Form onSubmit={handleSubmit}>
                        <div className="search">
                            <div class="md-block">
                                <input type="text" placeholder="Pesquise pela descrição" onChange={handleInput}/>
                            </div>
                            <OverlayTrigger overlay={
                                <Tooltip id={`tooltip-top`}>
                                    <strong>Search</strong>
                                </Tooltip>}>
                                <BtnDefaultIcons type="submit"><SearchIcon /></BtnDefaultIcons>
                            </OverlayTrigger>
                        </div>
                    </Form>
                </div>
                <BtnDefault onClick={handleRedirect} style={{
                    display: "flex",
                    float: "inline-end",
                    width: "20rem",
                    margin: "1rem",
                    justifyContent: "center"
                }}>
                    Nova Categoria
                </BtnDefault>
                <div className="titleTable">
                    <h3><CategoryIcon style={{fontSize: '45px', border:'2px solid #eeeeee', borderRadius: '50px', padding: '5px'}} /> Listagem de categorias</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr style={{backgroundColor: '#263238', color: 'white'}}>
                                <th>##</th>
                                <th>Código</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            { data.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.code}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                );                                
                            })}     
                        </tbody>
                    </Table>
                </div> 
            </div>    
        </AreaListagem>   
    );
}