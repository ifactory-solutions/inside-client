import React from 'react';
import { Input } from 'antd';

import { PLACEHOLDERS } from './step2Constants';

export function getStreetAddressInput() {
  return <Input type="text" placeholder={PLACEHOLDERS.STREET_ADDRESS} />;
}

export function getNumberInput() {
  return <Input type="number" placeholder={PLACEHOLDERS.NUMBER} />;
}

export function getApNumberInput() {
  return <Input type="text" placeholder={PLACEHOLDERS.AP_NUMBER} />;
}

export function getNeighborhoodInput() {
  return <Input type="text" placeholder={PLACEHOLDERS.NEIGHBOORHOOD} />;
}

export function getZipCodeInput() {
  return (
    <Input
      id="zipcode"
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
