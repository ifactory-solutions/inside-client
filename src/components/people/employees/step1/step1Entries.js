import React from 'react';
import { Input, DatePicker, Select } from 'antd';

import { PLACEHOLDERS, MARITAL_STATUS, GENDER } from './step1Constants';
import { DATE_FORMAT_PT_BR } from '../stepFormHelper';

const { Option } = Select;

// INPUT COMPONENTS

export function getFullNameInput() {
  return (
    <Input id="full_name" type="text" placeholder={PLACEHOLDERS.FULL_NAME} />
  );
}

export function getNickNameInput() {
  return (
    <Input id="nick_name" type="text" placeholder={PLACEHOLDERS.NICK_NAME} />
  );
}

export function getGenderSelector() {
  const genderOptions = GENDER.map(g => (
    <Option key={g.value} value={g.value}>
      {g.label}
    </Option>
  ));

  return <Select style={{ width: '50%' }}>{genderOptions}</Select>;
}

export function getFatherNameInput() {
  return (
    <Input
      id="filiation_father"
      type="text"
      placeholder={PLACEHOLDERS.FILIATION_FATHER}
    />
  );
}

export function getMotherNameInput() {
  return (
    <Input
      id="filiation_mother"
      type="text"
      placeholder={PLACEHOLDERS.FILIATION_MOTHER}
    />
  );
}

export function getNationalityInput() {
  return (
    <Input
      id="nationality"
      type="text"
      placeholder={PLACEHOLDERS.NATIONALITY}
    />
  );
}

export function getBirthDatePicker() {
  return (
    <DatePicker
      id="birth_date"
      format={DATE_FORMAT_PT_BR}
      style={{ width: '50%' }}
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

  return <Select style={{ width: '50%' }}>{martialStatusOptions}</Select>;
}

export function getSpouseNameInput() {
  return (
    <Input
      id="spouse_name"
      type="text"
      placeholder={PLACEHOLDERS.SPOUSE_NAME}
    />
  );
}

export function getChildrenAmountInput() {
  return (
    <Input
      id="chidren_amount"
      type="number"
      placeholder={PLACEHOLDERS.CHILDREN_AMOUNT}
    />
  );
}
