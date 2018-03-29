import React from 'react';
import SvgIcon from '../../components/svgIcon/SvgIcon';
import './Unauthorized.scss';

const Unauthorized = () => (
  <div className="error-component">
    <SvgIcon className="error-icon" icon="Unauthorized" />
    <span>Você não tem permissão para acessar essa tela.</span>
  </div>
);

export default Unauthorized;
