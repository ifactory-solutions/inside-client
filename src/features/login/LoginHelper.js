import React from 'react';
import { Icon } from 'antd';

export const EMPTY_EMAIL_MSG = 'Email é um campo obrigatório';
export const INVALID_EMAIL_MSG = 'Endereço de email inválido';
export const EMPTY_PASSWORD_MSG = 'Senha é um campo obrigatório';

export const getIconPrefix = icon => (
  <Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />
);

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //eslint-disable-line
  return re.test(email);
}
