import React from 'react';
import { InputNumber } from 'antd';

export const UIInputNumber = props => (
  <InputNumber style={{ width: '100%' }} min={0} defaultValue={0} {...props} />
);
