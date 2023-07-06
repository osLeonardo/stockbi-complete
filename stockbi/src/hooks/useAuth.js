import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import useFlashMessage from './useFlashMessage';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const { setFlashMessage } = useFlashMessage();
  const navigate = useNavigate();

  useEffect(() => {

    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true);
    }

  }, []);

  const register = async (user, EstablishmentId) => {
    try {
      const data = await api.post(`/user/create/establishment=${EstablishmentId}`, user).then((response) => {
        return response.data;
      })
      authUser(data);
    } catch (error) {
      console.error('Erro ao registrar usuário: ', error);
    }

  };

  const login = async (user) => {
    let msgText = "Login feito com sucesso! ";
    let msgType = "success";

    try {
      const data = await api.post("/user/login", user).then((response) => {
        return response.data;
      });

      await authUser(data);
    } catch (error) {
      msgText = error.response.data.message;
      msgType = 'error';
    }

    setFlashMessage(msgText, msgType);
  }

  const authUser = async (data) => {
    setAuthenticated(true);

    localStorage.setItem('token', JSON.stringify(data.token));

    navigate("/");
  };

  const logout = () => {

    setAuthenticated(false);

    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;

    navigate("/stock");
  }

  return { authenticated, register, logout, login };
}