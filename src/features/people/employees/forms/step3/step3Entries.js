import React from 'react';
import { Input, Select } from 'antd';

import { PLACEHOLDERS, PHONE_OPTIONS, EMAIL_OPTIONS } from './step3Constants';

const { Option } = Select;

export const getPhoneInput = () => (
  <Input type="text" placeholder={PLACEHOLDERS.PHONE} />
);

export const getPhoneSelector = () => {
  const phoneOptions = PHONE_OPTIONS.map((m, i) => {
    const optionKey = `${m.key}-${i}`;

    return (
      <Option key={optionKey} value={m.value}>
        {m.label}
      </Option>
    );
  });

  return <Select>{phoneOptions}</Select>;
};

export function getEmailInput() {
  return (
    <Input
      type="email"
      placeholder={PLACEHOLDERS.EMAIL}
    />
  );
}

export const getEmailSelector = () => {
  const phoneOptions = EMAIL_OPTIONS.map((m, i) => {
    const optionKey = `${m.key}-${i}`;

    return (
      <Option key={optionKey} value={m.value}>
        {m.label}
      </Option>
    );
  });

  return <Select>{phoneOptions}</Select>;
};
