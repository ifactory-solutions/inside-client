export const HORIZONTAL_FORM_LAYOUT = 'horizontal';
export const DATE_FORMAT_PT_BR = 'DD/MM/YYYY';
export const FORM_ITEM_LAYOUT = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};

export const FORM_ITEM_LAYOUT_2 = {
  labelCol: { span: 5 },
  wrapperCol: { span: 7 },
};

export function emailValidator(rule, value, callback) {
  const INVALID_EMAIL_MSG = 'Endereço de email inválido';
  const EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //eslint-disable-line

  if (!rule.required && !value) {
    callback();
  }

  if (EMAIL_REGEX.test(value)) {
    callback();
  } else {
    callback(INVALID_EMAIL_MSG);
  }
}

export function phoneValidator(rule, value, callback) {
  const INVALID_PHONE_MSG = 'Número de telefone inválido';
  const PHONE_REGEX = /^\([0-9]*\)\s*[0-9]*\s*-*\s*[0-9]*/i;

  if (!rule.required && !value) {
    callback();
  }

  if (PHONE_REGEX.test(value)) {
    callback();
  } else {
    callback(INVALID_PHONE_MSG);
  }
}
