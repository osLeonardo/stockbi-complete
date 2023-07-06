import React, { useContext, useState } from 'react';
import * as Styled from './styled';

import { Context } from '../../context/EstablishmentContext';
import { Field } from '../../components/Field';
import { Context as AddressContext } from '../../context/AddressContext';
import { useNavigate } from "react-router-dom";

export const EstablishmentRegister = () => {
  const [estabelecimento, setEstabelecimento] = useState({});
  const [endereco, setEndereco] = useState({});
  const { register } = useContext(Context);
  const { registerAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEstabelecimento({ ...estabelecimento, [e.target.name]: e.target.value });
  };

  const handleChangeEndereco = (e) => {
    setEndereco({ ...endereco, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addressId = await registerAddress(endereco);
    await register(estabelecimento, addressId);
    navigate("/register-admin");
  };

  return (
    <Styled.Container>
      <h1>Registrar Estabelecimento</h1>
      <form onSubmit={handleSubmit}>
        <h4>Dados</h4>
        <Field text="Nome" type="text" name="name" placeholder="Informe o nome" handleOnChange={handleChange} />
        <Field text="Código" type="text" name="code" placeholder="Informe o código" handleOnChange={handleChange} />
        <h4>Endereço</h4>
        <Field text="Rua" type="text" name="street" placeholder="Informe a rua" handleOnChange={handleChangeEndereco} />
        <Field text="Número" type="number" name="number" placeholder="Informe o Nº" handleOnChange={handleChangeEndereco} />
        <Field text="CEP" type="number" name="zip_code" placeholder="Informe o CEP" handleOnChange={handleChangeEndereco} />
        <Field text="Bairro" type="text" name="district_name" placeholder="Informe o Bairro" handleOnChange={handleChangeEndereco} />
        <Field text="Cidade" type="text" name="city_name" placeholder="Informe a cidade" handleOnChange={handleChangeEndereco} />
        <Field text="Estado" type="text" name="state_name" placeholder="Santa Catarina" handleOnChange={handleChangeEndereco} />
        <Field text="Sigla Estado" type="text" name="state_initials" placeholder="SC" handleOnChange={handleChangeEndereco} />
        <Field text="País" type="text" name="country_name" placeholder="Brasil" handleOnChange={handleChangeEndereco} />
        <Field text="Sigla País" type="text" name="country_initials" placeholder="BR" handleOnChange={handleChangeEndereco} />
        <input type="submit" value="Próximo" />
      </form>
    </Styled.Container>
  );
};
