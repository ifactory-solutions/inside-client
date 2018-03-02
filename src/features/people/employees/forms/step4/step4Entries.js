import React from 'react';
import { Input, DatePicker } from 'antd';

import { PLACEHOLDERS } from './step4Constants';
import { DATE_FORMAT_PT_BR } from '../../components/stepFormHelper';

export function getNumeroRGInput() {
  return (
    <Input id="numero_rg" type="text" placeholder={PLACEHOLDERS.RG.NUMERO} />
  );
}

export function getDataEmissaoRGDatePicker() {
  return (
    <DatePicker
      style={{ width: '100%' }}
      id="data_emissao_rg"
      format={DATE_FORMAT_PT_BR}
      placeholder={PLACEHOLDERS.RG.DATA_EMISSAO}
    />
  );
}

export function getOrgaoEmissorRGInput() {
  return (
    <Input
      id="orgao_emissor_rg"
      type="text"
      placeholder={PLACEHOLDERS.RG.EMISSOR}
    />
  );
}

export function getCPFInput() {
  return <Input id="cpf" type="text" placeholder={PLACEHOLDERS.CPF} />;
}

export function getNumeroCTPSInput() {
  return (
    <Input
      id="numero_ctps"
      type="text"
      placeholder={PLACEHOLDERS.NUMERO_CTPS}
    />
  );
}

export function getNumeroPisInput() {
  return (
    <Input id="numero_pis" type="text" placeholder={PLACEHOLDERS.NUMERO_PIS} />
  );
}

export function getNumeroTituloEleitorInput() {
  return (
    <Input
      id="numero_titulo"
      type="text"
      placeholder={PLACEHOLDERS.TITULO_ELEITOR.NUMERO}
    />
  );
}

export function getNumeroZonaEleitoralInput() {
  return (
    <Input
      id="numero_zona_eleitoral"
      type="number"
      placeholder={PLACEHOLDERS.TITULO_ELEITOR.ZONA}
    />
  );
}

export function getNumeroSecaoEleitoralInput() {
  return (
    <Input
      id="numero_secao_eleitoral"
      type="number"
      placeholder={PLACEHOLDERS.TITULO_ELEITOR.SECAO}
    />
  );
}

export function getDataEmissaoTituloDatePicker() {
  return (
    <DatePicker
      style={{ width: '100%' }}
      id="data_emissao_titulo_eleitor"
      format={DATE_FORMAT_PT_BR}
      placeholder={PLACEHOLDERS.TITULO_ELEITOR.DATA_EMISSAO}
    />
  );
}
