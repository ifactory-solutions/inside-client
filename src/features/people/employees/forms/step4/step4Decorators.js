const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getNumeroRGDecorator(decorator) {
  return decorator('rg.numero', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getDataEmissaoRGDecorator(decorator) {
  return decorator('data_emissao_rg', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getOrgaoEmissorRGDecorator(decorator) {
  return decorator('orgao_emissor_rg', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getCPFDecorator(decorator) {
  return decorator('cpf', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getNumeroCTPSDecorator(decorator) {
  return decorator('numero_ctps', {
    rules: [],
  });
}

function getNumeroPisDecorator(decorator) {
  return decorator('numero_pis', {
    rules: [],
  });
}

function getNumeroTituloEleitorDecorator(decorator) {
  return decorator('numero_titulo', {
    rules: [],
  });
}

function getNumeroZonaEleitoralDecorator(decorator) {
  return decorator('numero_zona_eleitoral', {
    rules: [],
  });
}

function getNumeroSecaoEleitoralDecorator(decorator) {
  return decorator('numero_secao_eleitoral', {
    rules: [],
  });
}

function getDataEmissaoTituloDecorator(decorator) {
  return decorator('data_emissao_titulo_eleitor', {
    rules: [],
  });
}

function getNomeBancoDecorator(decorator) {
  return decorator('nome_banco', {
    rules: [],
  });
}

function getTipoContaDecorator(decorator) {
  return decorator('tipo_conta_bancaria', {
    rules: [],
  });
}

function getNumeroAgenciaDecorator(decorator) {
  return decorator('numero_agencia_bancaria', {
    rules: [],
  });
}

function getNumeroContaDecorator(decorator) {
  return decorator('numero_conta_bancaria', {
    rules: [],
  });
}

export function getDecoratorManager(decorator) {
  return {
    numeroRGDecorator: getNumeroRGDecorator(decorator),
    dataEmissaoRGDecorator: getDataEmissaoRGDecorator(decorator),
    orgaoEmissorRGDecorator: getOrgaoEmissorRGDecorator(decorator),
    CPFDecorator: getCPFDecorator(decorator),
    numeroCTPSDecorator: getNumeroCTPSDecorator(decorator),
    numeroPisDecorator: getNumeroPisDecorator(decorator),
    numeroTituloEleitorDecorator: getNumeroTituloEleitorDecorator(decorator),
    numeroZonaEleitoralDecorator: getNumeroZonaEleitoralDecorator(decorator),
    numeroSecaoEleitoralDecorator: getNumeroSecaoEleitoralDecorator(decorator),
    dataEmissaoTituloDecorator: getDataEmissaoTituloDecorator(decorator),
    nomeBancoDecorator: getNomeBancoDecorator(decorator),
    tipoContaDecorator: getTipoContaDecorator(decorator),
    numeroAgenciaDecorator: getNumeroAgenciaDecorator(decorator),
    numeroContaDecorator: getNumeroContaDecorator(decorator),
  };
}
