import * as Styled from './styled';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Field } from '../../components/Field';

export const Profile = () => {
  const [user, setUser] = useState({});
  const [token] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    const data = api.get('/user/checkuser', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    });
    setUser(data);
  }, [token]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.patch(`/user/${user.id}`, user, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(token)}`,
        }
      });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <h1>Perfil</h1>
      </Styled.Header>
      <form onSubmit={handleSubmit}>
        <Field type='email' name='mail' text='E-mail' placeholder='Informe seu e-mail' handleOnChange={handleChange} value={user.mail || ''} />
        <Field type='text' name='name' text='Nome' placeholder='Informe o seu nome' handleOnChange={handleChange} value={user.name || ''} />
        <Field type='text' name='lastname' text='Sobrenome' placeholder='Informe o seu sobrenome' handleOnChange={handleChange} value={user.lastname || ''} />
        <Field type='text' name='telephone' text='Telefone' placeholder='Informe o seu telefone' handleOnChange={handleChange} value={user.telephone || ''} />
        <Field type='password' name='password' text='Senha' placeholder='Informe a sua senha' handleOnChange={handleChange} />
        <Field type='password' name='confirmPassword' text='Confirmação' placeholder='Confirme a sua senha' handleOnChange={handleChange} />
        <input type='submit' value='Editar' />
      </form>
    </Styled.Container>
  )
}
