import React from 'react';
import { Input } from 'antd';

import { PLACEHOLDERS } from './step3Constants';

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
