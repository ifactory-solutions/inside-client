function getNomeBancoDecorator(decorator) {
  return decorator('nomeBanco', {
    rules: [],
  });
}

function getTipoContaDecorator(decorator) {
  return decorator('tipoContaBancaria', {
    rules: [],
  });
}

function getNumeroAgenciaDecorator(decorator) {
  return decorator('numeroAgenciaBancaria', {
    rules: [],
  });
}

function getNumeroContaDecorator(decorator) {
  return decorator('numeroContaBancaria', {
    rules: [],
  });
}

export function getDecoratorManager(decorator) {
  return {
    nomeBancoDecorator: getNomeBancoDecorator(decorator),
    tipoContaDecorator: getTipoContaDecorator(decorator),
    numeroAgenciaDecorator: getNumeroAgenciaDecorator(decorator),
    numeroContaDecorator: getNumeroContaDecorator(decorator),
  };
}
