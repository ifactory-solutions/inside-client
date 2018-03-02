import React from 'react';
import { Input, Select } from 'antd';

import { PLACEHOLDERS, TIPOS_CONTA_BANCARIA } from './step5Constants';

const { Option } = Select;

export function getNomeBancoInput() {
  return (
    <Input
      id="nome_banco"
      type="text"
      placeholder={PLACEHOLDERS.DADOS_BANCARIOS.NOME_BANCO}
    />
  );
}

export function getTipoContaSelector() {
  const genderOptions = TIPOS_CONTA_BANCARIA.map(tipoConta => (
    <Option key={tipoConta.value} value={tipoConta.value}>
      {tipoConta.label}
    </Option>
  ));

  return <Select>{genderOptions}</Select>;
}

export function getNumeroAgenciaInput() {
  return (
    <Input
      id="numero_agencia_bancaria"
      type="text"
      placeholder={PLACEHOLDERS.DADOS_BANCARIOS.AGENCIA}
    />
  );
}

export function getNumeroContaInput() {
  return (
    <Input
      id="numero_conta_bancaria"
      type="text"
      placeholder={PLACEHOLDERS.DADOS_BANCARIOS.CONTA}
    />
  );
}
