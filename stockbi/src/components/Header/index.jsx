import React, {useContext} from 'react';
import {AreaHeader} from './styled';
import { Link} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Context } from '../../context/UserContext';
import imagemLogo from '../../images/logo.png';

export const Header = (props) => {
  const { authenticated, logout } = useContext(Context);
    return (
     
      <AreaHeader>
        <div className='header'>
          <div className="container">
              <div className="logo">
                <Link to="/"><img src={imagemLogo} alt='Imagem escrito Stock BI'/></Link>
              </div>
              <nav>
                <div className="user">
                  {/* <label>{props.user.name}</label> */}
                </div>
                <ul>
                {authenticated && (
                  <>
                    <li><Link to="/cadastro-itens">Cadastro de Itens</Link></li>
                    <li><Link to="/categorias">Categorias</Link></li>
                    <li><Link to="/">Fornecedores</Link></li>
                    <li><Link to="/dashboard">Listagem de itens</Link></li>
                    <li><Link to="/config"><SettingsIcon/></Link></li>
                  </>
                  
                )}
                  
                {!authenticated && (
                  <li><Link to="/"><HomeIcon/></Link></li>
                )}
                {authenticated
                    ? (
                      <>
                        <li><Link to="/user/profile"><AccountCircleIcon/>Perfil</Link></li>
                        <li><Link onClick={logout}><LogoutIcon/>Sair</Link></li>
                      </>
                    )
                    : (
                      <>
                        <li><Link to="/register" replace>Registrar-se</Link></li>
                        <li><Link to="/login">Login</Link></li>
                      </> 
                    )}   
                </ul>
              </nav>
            </div>
        </div>
      </AreaHeader>
    );
}