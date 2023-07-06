import styled from 'styled-components';

export const CadastroProdutoView = styled.div`
  h2 {
    margin: 20px;
  }

  .create-item {
    display: flex;
    justify-content: center;
    height: 50vh;
  }

  .form-input-row {
    display: flex;
    margin-bottom: 10px;
  }

  .form-input {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }

  label {
    text-align: left;
    font-size: 18px
  }

  input, select {
    margin-bottom: 15px;
    padding: 10px;
    
    outline: none;
    border: 2px solid #1D262D;
    border-radius: 5px;
    width: 100%;
    transition: 0.3s;

    &:focus{
        border: 1px solid #7d2ae8;
    }
    
  }

  .date {
    width: 48%;
  }

  @media (max-width: 600px) {
    label {
      text-align: left;
    }

    .form-input-row {
      flex-direction: column;
    }
  }

`;