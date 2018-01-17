import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

export function getNameInput() {
  return <Input />;
}

export function getDescriptionInput() {
  return <TextArea rows={3} />;
}
