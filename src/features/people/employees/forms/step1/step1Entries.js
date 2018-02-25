import React from 'react';
import { Input, DatePicker, Select } from 'antd';

import { PLACEHOLDERS, MARITAL_STATUS, GENDER } from './step1Constants';
import { DATE_FORMAT_PT_BR } from '../../components/stepFormHelper';

const { Option } = Select;

// INPUT COMPONENTS

export function getFullNameInput() {
  return <Input type="text" placeholder={PLACEHOLDERS.FULL_NAME} />;
}

export function getNickNameInput() {
  return <Input type="text" placeholder={PLACEHOLDERS.NICK_NAME} />;
}

export function getGenderSelector() {
  const genderOptions = GENDER.map(g => (
    <Option key={g.value} value={g.value}>
      {g.label}
    </Option>
  ));

  return <Select>{genderOptions}</Select>;
}

export function getFatherNameInput() {
  return <Input type="text" placeholder={PLACEHOLDERS.FILIATION_FATHER} />;
}

export function getMotherNameInput() {
  return <Input type="text" placeholder={PLACEHOLDERS.FILIATION_MOTHER} />;
}

export function getNationalityInput() {
  return <Input type="text" placeholder={PLACEHOLDERS.NATIONALITY} />;
}

export function getBirthDatePicker() {
  return (
    <DatePicker
      style={{ width: '100%' }}
      format={DATE_FORMAT_PT_BR}
      placeholder={PLACEHOLDERS.BIRTH_DATE}
    />
  );
}

export function getMaritalStatusInput() {
  const martialStatusOptions = MARITAL_STATUS.map(m => (
    <Option key={m.value} value={m.value}>
      {m.label}
    </Option>
  ));

  return <Select>{martialStatusOptions}</Select>;
}

export function getSpouseNameInput() {
  return <Input type="text" placeholder={PLACEHOLDERS.SPOUSE_NAME} />;
}

export function getChildrenAmountInput() {
  return <Input type="number" placeholder={PLACEHOLDERS.CHILDREN_AMOUNT} />;
}
