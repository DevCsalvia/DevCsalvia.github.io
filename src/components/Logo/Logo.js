import React from 'react';

import runnerLogo from '../../assets/images/Logo.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo">
        <img src={runnerLogo} alt="LOGO" />
    </div>
);

export default logo;