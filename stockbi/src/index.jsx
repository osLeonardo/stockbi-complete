import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { RoutesFront } from './Routes';
import { Header } from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import { EstablishmentProvider } from './context/EstablishmentContext';
import { AddressProvider } from './context/AddressContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <EstablishmentProvider>
        <AddressProvider>
          <UserProvider>
            <Header />
            <RoutesFront />
          </UserProvider>
        </AddressProvider>
      </EstablishmentProvider>
    </BrowserRouter>
  </React.StrictMode>
);
