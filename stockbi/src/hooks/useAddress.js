import { api } from "../services/api";

export const useAddress = () => {

  const registerAddress = async (address) => {
    try {
      const { data } = await api.post('/address/create', address);
      return data.id;
    } catch (error) {
      console.error('Erro ao cadastrar endereço para estabelecimento', error);
    };
  };

  return { registerAddress };
};