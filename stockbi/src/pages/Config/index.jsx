import { useEffect, useState } from 'react';
import * as Styled from './styled';
import { api } from '../../services/api';
import { Combobox } from '../../components/Combobox';
import { RadioGroup } from '../../components/RadioGroup';

export const Config = () => {
  const [config, setConfig] = useState({});
  const [token] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    api.get('/preferences/find-one-by-user', {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`
      }
    }).then((response) => {
      setConfig(response.data.currentPreferences);
    });
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.patch(`/preferences/${config.id}`, config, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(token)}`,
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return error.response.data;
    }
  };

  const languageOptions = [
    { value: 'portugues', label: 'Português' },
    { value: 'inglês', label: 'Inglês' }
  ];

  const themeOptions = [
    { value: 'light', label: 'Claro' },
    { value: 'dark', label: 'Escuro' }
  ];

  const handleOptionChange = (selectedValue) => {
    setConfig({ ...config, theme: selectedValue });
  };

  const handleChange = (language) => {
    setConfig({ ...config, language: language })
  };

  return (
    <Styled.Container>
      <Styled.Header>
        <h1>Configurações</h1>
      </Styled.Header>
      <form onSubmit={handleSubmit}>
        <Combobox options={languageOptions} name='language' text='Idioma' onChange={handleChange} selectedOption={config.language} />
        <RadioGroup options={themeOptions} selectedOption={config.theme} onChange={handleOptionChange} name='theme' text='Tema' />
        <input type='submit' value='Salvar' />
      </form>
    </Styled.Container>
  )
}