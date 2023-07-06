import { api } from "../services/api";

export default function useCategory() {

    const createCategory = async (category) => {
        try {
          await api.post('/category/create', category).then((response) => {
            return response.data;
          });         
        } catch (error) {
          console.error('Erro ao criar categoria: ', error);
        };
    };

    const listCategory = async () => {
        try {
          await api.get('/category/find-all').then((response) => {
            return response.data;
          });         
        } catch (error) {
          console.error('Erro ao listar categorias: ', error);
        };
    };

    const getCategory = async (product) => {
        try {
          await api.get('/category/find-one/'+product.id).then((response) => {
            return response.data;
          });         
        } catch (error) {
          console.error('Erro ao obter categoria: ', error);
        };
    };

    const deleteCategory = async (product) => {
        try {
          await api.delete('/category/'+product.id).then((response) => {
            return response.data;
          });         
        } catch (error) {
          console.error('Erro ao deletar categoria: ', error);
        };
    };

    return { createCategory, listCategory, getCategory, deleteCategory };
};