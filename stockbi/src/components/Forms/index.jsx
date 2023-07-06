import React from "react";
import { AreaPrincipal } from "./styled";
import imagemLogo from '../../images/logo.png';

export const Forms = () => {
    return(
        <AreaPrincipal>
            <img src={imagemLogo} alt='Stock BI' width={450} height={175} className="flutuante"/>      
        </AreaPrincipal>    
    );
};