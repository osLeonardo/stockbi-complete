import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Config } from './pages/Config'
import { Login } from "./pages/Cadastro/Login";
import { Stock } from "./pages/Stock";
import { PageNotFound } from "./pages/PageNotFound/index";
import { Context } from './context/UserContext';
import { Context as EstablishmentContext } from './context/EstablishmentContext';
import { Profile } from '../src/pages/User/Profile';
import { Dashboard } from "./pages/Dashboard";
import { Categoria } from './pages/Categoria/Cadastro';
import { Categorias } from './pages/Categoria/Listagem';
import { EstablishmentRegister } from './pages/EstablishmentRegister';
import { UserRegister } from './pages/UserRegister';
import { ItensRegister } from "./pages/ItemRegister";

export const RoutesFront = () => {
    const Private = ({ children }) => {
        const { authenticated } = useContext(Context);

        if (!authenticated) {
            return <Navigate to="/stock" />;
        }
        return children;
    };

    const EstablishmentRegistered = () => {
        const { registered } = useContext(EstablishmentContext);

        return registered ? <UserRegister isAdmin={false} /> : <EstablishmentRegister />;
    };

    return (
        <Routes>
            <Route exact path='/stock' element={<Stock />} />
            <Route exact path='/' element={<Private><Home /></Private>} />
            <Route exact path='/config' element={<Private><Config /></Private>} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/register' element={<EstablishmentRegistered />} />
            <Route exact path='/cadastro-itens' element={<Private><ItensRegister /></Private>} />
            <Route exact path='/categoria' element={<Private><Categoria /></Private>} />
            <Route exact path='/categorias' element={<Private><Categorias /></Private>} />
            <Route exact path='/dashboard' element={<Private><Dashboard /></Private>} />
            <Route exact path='/user/profile' element={<Private><Profile /></Private>} />
            <Route exact path='/register-admin' element={<UserRegister isAdmin={true} />} />
            <Route exact path='*' element={<PageNotFound />} />
        </Routes>
    );
};