import { api } from "../services/api";
import useFlashMessage from './useFlashMessage';

export default function useProduct() {

    const { setFlashMessage } = useFlashMessage();

    const createProduct = async (product) => {
        let msgText = "Produto registrado com sucesso!";
        let msgType = "success";
        try {
          await api.post('/product/create', product).then((response) => {
            return response.data;
          })
         
        } catch (error) {
          msgText = error.response.data.message;
          msgType = 'error';
        }
    
        setFlashMessage(msgText, msgType);
    };

    const listProduct = async () => {
        try {
          await api.get('/product/find-all').then((response) => {
            return response.data;
          })
         
        } catch (error) {
          console.error('Erro ao listar produtos: ', error);
        };
    };

    const getProduct = async (product) => {
        try {
          await api.get('/product/find-one/'+product.id).then((response) => {
            return response.data;
          })
         
        } catch (error) {
          console.error('Erro ao obter produto: ', error);
        };
    };

    const deleteProduct = async (product) => {
        try {
          await api.delete('/product/'+product.id).then((response) => {
            return response.data;
          })
         
        } catch (error) {
          console.error('Erro ao deletar produto: ', error);
        }
    };

    return { createProduct, listProduct, getProduct, deleteProduct };
};