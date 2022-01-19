import React from 'react';
import mainLogo from '../../../Img/logo.png'
import "./MainLogo.css"

function MainLogo() {
    return (
        <img className="mainLogo" src={mainLogo} alt="Names Info Logo" />
    );
}

export default MainLogo;