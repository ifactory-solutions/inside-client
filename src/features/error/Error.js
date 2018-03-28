import React from 'react';
import SvgIcon from '../../components/svgIcon/SvgIcon';
import './Error.scss';

const Error = () => (
  <div className="error-component">
    <SvgIcon className="error-icon" icon="NotFound" />
    <span>404. A página que você está buscando deve ter sido abduzida.</span>
  </div>
);

export default Error;
