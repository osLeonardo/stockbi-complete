import { useEffect, useState } from 'react';

import { api } from "../services/api";

export const useEstablishment = () => {
  const [registered, setRegistered] = useState(false);
  const [establishment, setEstablishment] = useState({});

  useEffect(() => {
    checkEstablishmentRegistration();
  }, []);

  const register = async (establishment, id) => {
    try {
      const response = await api.post(`/establishment/create/address=${id}`, establishment);
      setRegistered(true);
      setEstablishment(response.data.newEstablishment.identifiers[0]);
    } catch (error) {
      console.error('Erro ao cadastrar estabelecimento', error);
    };
  };

  const checkEstablishmentRegistration = async () => {
    try {
      const { data } = await api.get('/establishment/find-all');
      if (data.establishment.length > 0) {
        setRegistered(true);
        setEstablishment(data.establishment[0]);
      } else {
        setRegistered(false);
      };
    } catch (error) {
      console.error('Erro ao verificar se estabelecimento está registrado', error);
    };
  };

  return { registered, register, establishment };
};