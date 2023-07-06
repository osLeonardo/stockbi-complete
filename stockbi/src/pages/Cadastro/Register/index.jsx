import React, { useState, useContext } from "react";
import { AreaLogin } from "../styled"
import { BtnDefault } from "../../../components/Styled"
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { Context } from "../../../context/UserContext"

//TODO: fazer o cadastro de usuario no banco e verificar os campos obrigatórios
export const Register = () => {
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    const [user, setUser] = useState({});
    const { register } = useContext(Context);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        register(user);
    }

    return (
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Crie sua conta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AreaLogin>
                        <form onSubmit={handleSubmit} >
                            <div className="first">
                                <div className="form-input">
                                    <label>Nome</label>
                                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleChange} />
                                </div>
                                <div className="form-input">
                                    <label>Sobrenome</label>
                                    <input type="text" name="lastname" placeholder="Digite o seu sobrenome" onChange={handleChange} />
                                </div>
                            </div>

                            <div className="form-input">
                                <label>Telefone</label>
                                <input type="text" name="telephone" placeholder="Digite o seu telefone" onChange={handleChange} />
                            </div>
                            <div className="form-input">
                                <label>Endereço</label>
                                <input type="text" name="address" placeholder="Digite o seu endereço" onChange={handleChange} />
                            </div>
                            <div className="form-input">
                                <label>Email</label>
                                <input type="email" name="mail" placeholder="Digite o seu e-mail" onChange={handleChange} />
                            </div>
                            <div className="form-input">
                                <label>Senha</label>
                                <input type="password" name="password" placeholder="Crie a sua senha" onChange={handleChange} />
                            </div>
                            <div className="form-input">
                                <label>Confirme a senha</label>
                                <input type="password" placeholder="Confirme a sua senha" />
                            </div>
                            <BtnDefault type="submit">Comece agora!</BtnDefault>
                            <div className="footer-login">
                                Já tem uma conta? <Link to="/login">Faça login</Link>
                            </div>
                        </form>
                    </AreaLogin>
                </Modal.Body>
            </Modal>
        </div>
    );
}