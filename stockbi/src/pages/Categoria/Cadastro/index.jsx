import React, { useState } from "react";
import { BtnDefaultCancel, BtnDefaultSave } from "../../../components/Styled";
import { AreaCadastro } from "./styled";
import { useNavigate } from "react-router-dom";
import useFlashMessage from "../../../hooks/useFlashMessage"
import { api } from "../../../services/api"
import { Message } from "../../../components/Message";

import Modal from 'react-bootstrap/Modal';

export const Categoria = () => {
    const [category, setCategory] = useState({});
    const { setFlashMessage } = useFlashMessage();
    const navigate = useNavigate();

    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        navigate("/categorias");
    }

    const handleChange = (e) => {
        setCategory({ ...category, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createCategory(category);
    }

    const createCategory = async (category) => {
        let msgText = "Categoria registrada com sucesso!";
        let msgType = "success";
        try {
            await api.post('/category/create', category).then((response) => {
                return response.data;
            });
        } catch (error) {
            msgText = error.response.data.message;
            msgType = 'error';
        };

        navigate("/categorias");

        setFlashMessage(msgText, msgType);
    };

    return (
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Crie uma categoria</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AreaCadastro>
                        <form onSubmit={handleSubmit} >
                            <div className="form-input">
                                <label>Código</label>
                                <input type="text" name="code" placeholder="Digite o código da categoria" onChange={handleChange} />
                            </div>
                            <div className="form-input">
                                <label>Descrição</label>
                                <input type="text" name="description" placeholder="Digite a descrição" onChange={handleChange} />
                            </div>
                            <BtnDefaultCancel variant="secondary" onClick={handleClose}>
                                Cancelar
                            </BtnDefaultCancel>
                            <BtnDefaultSave variant="primary" type="submit">
                                Salvar
                            </BtnDefaultSave>
                            <Message />
                        </form>
                    </AreaCadastro>
                </Modal.Body>
            </Modal>
        </div>
    );

};