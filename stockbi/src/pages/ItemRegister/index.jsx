import React, { useState, useEffect } from "react";
import { CadastroProdutoView } from "./styled";
import { ContainerPage } from "../../components/Main";
import { api } from "../../services/api";
import { Form} from 'react-bootstrap';
import { BtnDefaultCancel, BtnDefaultSave } from "../../components/Styled";
import { useNavigate } from "react-router-dom";
import { Message } from "../../components/Message";
import useFlashMessage from "../../hooks/useFlashMessage";

export const ItensRegister = () => {

  const [categories, setCategories] = useState([]); 
  const [item, setItem] = useState({});
  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestData = await api.get("/category/find-all");
        setCategories(requestData.data.categories);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  
  const handleChange = (e) => {
    setItem({ ...item, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      createItem(item);  
  }

  const createItem = async (item) => {
      let msgText = "Item registrado com sucesso!";
      let msgType = "success";
      try {
        await api.post('/product/create/category='+item.category_id, item).then((response) => {
          return response.data;
        })
       
      } catch (error) {
        msgText = error.response.data.message;
        msgType = 'error';
      }

      navigate("/dashboard");
  
      setFlashMessage(msgText, msgType);
  };


  const handleClose = () => {
    navigate("/dashboard");
  } 
  
  return (
    <ContainerPage>
      <CadastroProdutoView>
        <div className="create-item">
          <form onSubmit={handleSubmit}>
            <h2 style={{marginLeft: '100px'}}>Cadastro de Itens</h2>
            <div className="form-input-row">
              <div className="form-input">
                <label htmlFor="part_number">Código</label>
                <input
                  type="text"
                  id="part_number"
                  onChange={handleChange}
                />
              </div>
              <div className="form-input">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-input-row">
              <div className="form-input">
                <label htmlFor="category_id">Categoria</label>
                <select
                  id="category_id"
                  onChange={handleChange}
                >
                  <option value="">- SELECIONE UMA CATEGORIA -</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.description}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-input">
                <label htmlFor="brand">Marca</label>
                <input
                  type="text"
                  id="brand"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-input-row">
              <div className="form-input">
                <label htmlFor="buy_price">Valor de compra</label>
                <input
                  type="text"
                  id="buy_price"
                  onChange={handleChange}
                />
              </div>
              <div className="form-input">
                <label htmlFor="sale_price">Valor de venda</label>
                <input
                  type="text"
                  id="sale_price"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-input-row">
              <div className="form-input">
                <label htmlFor="quantity_in_stock">Quantidade</label>
                <input
                  type="number"
                  id="quantity_in_stock"
                  onChange={handleChange}
                />
              </div>
              <div className="form-input">
                <label htmlFor="bar_code">Código de Barras</label>
                <input
                  type="text"
                  id="bar_code"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div  className="form-input-row">
              <label htmlFor="active_status" style={{marginRight: '10px'}}>Status:</label>
               <Form.Check style={{width: '25px'}} id="active_status" text="Status" onChange={handleChange}/>
            </div>
            <br />
            <div className="form-input-row" style={{marginTop: '-18px'}}>
              <BtnDefaultCancel variant="secondary" onClick={handleClose} style={{width: '100%', fontSize: '18px', marginLeft: '-5px'}}>
                  Cancelar
              </BtnDefaultCancel>
              <BtnDefaultSave variant="primary" type="submit" style={{width: '100%', fontSize: '18px'}}>
                  Salvar
              </BtnDefaultSave>
              <Message />
            </div>
          </form>
        </div>
      </CadastroProdutoView>
    </ContainerPage>
  );
};
