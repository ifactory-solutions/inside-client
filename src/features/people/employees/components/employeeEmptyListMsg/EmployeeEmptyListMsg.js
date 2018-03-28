import React from 'react';

import SvgIcon from '../../../../../components/svgIcon/SvgIcon';
import './EmployeeEmptyListMsg.scss';

const EmployeeEmptyListMsg = () => (
  <div className="add-user-component">
    <SvgIcon icon="AddUser" className="add-user-icon" />
    <span>Adicione novos colaboradores ao inside.</span>
  </div>
);


export default EmployeeEmptyListMsg;
