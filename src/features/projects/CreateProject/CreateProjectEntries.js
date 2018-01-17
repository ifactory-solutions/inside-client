import React from 'react';
import { Input, DatePicker } from 'antd';

const { TextArea } = Input;

export function getNameInput() {
  return <Input />;
}

export function getDescriptionInput() {
  return <TextArea rows={4} />;
}

export function getStartDatePicker() {
  return (
    <DatePicker style={{ width: '100%' }} placeholder="Selecione uma data" />
  );
}

export function getFinishDatePicker() {
  return (
    <DatePicker style={{ width: '100%' }} placeholder="Selecione uma data" />
  );
}
