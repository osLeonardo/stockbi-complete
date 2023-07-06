import * as Styled from './styled';
import { useContext, useState } from 'react';
import { Field } from '../../components/Field';
import { Context } from '../../context/EstablishmentContext';
import { Context as UserContext } from "../../context/UserContext"

export const UserRegister = (isAdmin = false) => {
  const [user, setuser] = useState({});
  const { establishment } = useContext(Context);
  const { register } = useContext(UserContext);

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    register(user, establishment.id);
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <h1>Cadastro de {isAdmin.isAdmin ? 'Admin' : 'Usuário'}</h1>
      </Styled.Header>
      <form onSubmit={handleSubmit}>
        <Field type='email' name='mail' text='E-mail' placeholder='Informe seu e-mail' handleOnChange={handleChange} />
        <Field type='text' name='name' text='Nome' placeholder='Informe o seu nome' handleOnChange={handleChange} />
        <Field type='text' name='lastname' text='Sobrenome' placeholder='Informe o seu sobrenome' handleOnChange={handleChange} />
        <Field type='text' name='telephone' text='Telefone' placeholder='Informe o seu telefone' handleOnChange={handleChange} />
        <Field type='password' name='password' text='Senha' placeholder='Informe a sua senha' handleOnChange={handleChange} />
        <Field type='password' name='confirmPassword' text='Confirmação' placeholder='Confirme a sua senha' handleOnChange={handleChange} />
        <input type='submit' value='Salvar' />
      </form>
    </Styled.Container>
  )
};
