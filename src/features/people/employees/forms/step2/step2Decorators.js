const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getLine1Decorator(decorator) {
  return decorator('line1', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getLine2Decorator(decorator) {
  return decorator('line2', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getLine3Decorator(decorator) {
  return decorator('line3', {
    rules: [],
  });
}

function getLine4Decorator(decorator) {
  return decorator('line4', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getZipCodeDecorator(decorator) {
  return decorator('zipcode', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getCityDecorator(decorator) {
  return decorator('city', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getStateDecorator(decorator) {
  return decorator('state', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getCountryDecorator(decorator) {
  return decorator('country', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

export function getDecoratorManager(decorator) {
  return {
    line1Decorator: getLine1Decorator(decorator),
    line2Decorator: getLine2Decorator(decorator),
    line3Decorator: getLine3Decorator(decorator),
    line4Decorator: getLine4Decorator(decorator),
    zipCodeDecorator: getZipCodeDecorator(decorator),
    cityDecorator: getCityDecorator(decorator),
    stateDecorator: getStateDecorator(decorator),
    countryDecorator: getCountryDecorator(decorator),
  };
}
