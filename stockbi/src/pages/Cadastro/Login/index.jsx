import React, { useState, useContext } from "react";
import { AreaLogin } from "../styled"
import { BtnDefault } from "../../../components/Styled"
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { Message } from "../../../components/Message";

import { Context } from "../../../context/UserContext"

export const Login = () => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const [user, setUser] = useState({});
    const { login } = useContext(Context);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user);
    };

    return (
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Faça login na sua conta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AreaLogin>
                        <form onSubmit={handleSubmit}>
                            <div className="form-input">
                                <label>Email</label>
                                <input type="email" name="mail" id="email" placeholder="exemplo@exemplo.com" onChange={handleChange} />
                            </div>
                            <div className="form-input">
                                <label>Senha</label>
                                <input type="password" name="password" id="password" placeholder="Digite sua senha" onChange={handleChange} />
                            </div>
                            <BtnDefault type="submit">Entrar</BtnDefault>
                            <Message />
                            <div className="footer-login">
                                Não tem uma conta? <Link to="/register">Registre-se</Link>
                                <div>
                                    <Link to="/">Esqueceu a senha?</Link>
                                </div>
                            </div>
                        </form>
                    </AreaLogin>
                </Modal.Body>
            </Modal>
        </div>
    );
}