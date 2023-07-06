import React from 'react';
import * as Styled from './styles';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <Styled.Container>
            <div>
                Erro 404! Página Não encontrada :/
            </div>
            <nav>
                <Link to="/">Página Principal</Link>
            </nav>
        </Styled.Container>
    );
};