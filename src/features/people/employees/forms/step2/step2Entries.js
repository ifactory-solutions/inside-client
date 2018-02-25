import React from 'react';
import { Input } from 'antd';

import { PLACEHOLDERS } from './step2Constants';

export function getLine1Input() {
  return <Input id="line_1" type="text" placeholder={PLACEHOLDERS.LINE_1} />;
}

export function getLine2Input() {
  return <Input id="line_2" type="number" placeholder={PLACEHOLDERS.LINE_2} />;
}

export function getLine3Input() {
  return <Input id="line_3" type="text" placeholder={PLACEHOLDERS.LINE_3} />;
}

export function getLine4Input() {
  return <Input id="line_4" type="text" placeholder={PLACEHOLDERS.LINE_4} />;
}

export function getZipCodeInput() {
  return (
    <Input
      id="zip_code"
      type="number"
      pattern="[0-9]{5}"
      placeholder={PLACEHOLDERS.ZIP_CODE}
    />
  );
}

export function getCityInput() {
  return <Input id="city" type="text" placeholder={PLACEHOLDERS.CITY} />;
}

export function getStateInput() {
  return <Input id="state" type="text" placeholder={PLACEHOLDERS.STATE} />;
}

export function getCountryInput() {
  return <Input id="country" type="text" placeholder={PLACEHOLDERS.COUNTRY} />;
}
