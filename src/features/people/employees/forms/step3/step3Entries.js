import React from 'react';
import { Input, Select } from 'antd';

import { PLACEHOLDERS, PHONE_OPTIONS } from './step3Constants';

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

export function getPhone1Input() {
  return <Input id="phone_1" type="text" placeholder={PLACEHOLDERS.PHONE_1} />;
}

export function getPhone2Input() {
  return <Input id="phone_2" type="text" placeholder={PLACEHOLDERS.PHONE_2} />;
}

export function getPersonalEmailInput() {
  return (
    <Input
      id="personal_email"
      type="email"
      placeholder={PLACEHOLDERS.PERSONAL_EMAIL}
    />
  );
}

export function getOfficeEmailInput() {
  return (
    <Input
      id="office_email"
      type="email"
      placeholder={PLACEHOLDERS.OFFICE_EMAIL}
    />
  );
}
