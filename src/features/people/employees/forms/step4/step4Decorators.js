const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getNumeroRGDecorator(decorator) {
  return decorator('numeroRG', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getDataEmissaoRGDecorator(decorator) {
  return decorator('dataEmissaoRG', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getOrgaoEmissorRGDecorator(decorator) {
  return decorator('orgaoEmissorRG', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getCPFDecorator(decorator) {
  return decorator('cpf', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getNumeroCTPSDecorator(decorator) {
  return decorator('numeroCTPS', {
    rules: [],
  });
}

function getNumeroPisDecorator(decorator) {
  return decorator('numeroPIS', {
    rules: [],
  });
}

function getNumeroTituloEleitorDecorator(decorator) {
  return decorator('numeroTitulo', {
    rules: [],
  });
}

function getNumeroZonaEleitoralDecorator(decorator) {
  return decorator('numeroZonaEleitoral', {
    rules: [],
  });
}

function getNumeroSecaoEleitoralDecorator(decorator) {
  return decorator('numeroSecaoEleitoral', {
    rules: [],
  });
}

function getDataEmissaoTituloDecorator(decorator) {
  return decorator('dataEmissaoTituloEleitor', {
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
  };
}
