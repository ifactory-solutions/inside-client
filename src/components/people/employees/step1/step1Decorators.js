const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getFullNameDecorator(decorator) {
  return decorator('full_name', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getNickNameDecorator(decorator) {
  return decorator('nick_name', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getFatherNameDecorator(decorator) {
  return decorator('filiation_father', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getMotherNameDecorator(decorator) {
  return decorator('filiation_mother', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getNationalityDecorator(decorator) {
  return decorator('nationality', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getBirthDateDecorator(decorator) {
  return decorator('birth_date', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getMaritalStatusDecorator(decorator) {
  return decorator('marital_status', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getGenderDecorator(decorator) {
  return decorator('gender', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

export function getDecoratorManager(decorator) {
  return {
    fullNameDecorator: getFullNameDecorator(decorator),
    nickNameDecorator: getNickNameDecorator(decorator),
    fatherNameDecorator: getFatherNameDecorator(decorator),
    motherNameDecorator: getMotherNameDecorator(decorator),
    nationalityDecorator: getNationalityDecorator(decorator),
    birthDateDecorator: getBirthDateDecorator(decorator),
    maritalStatusDecorator: getMaritalStatusDecorator(decorator),
    genderDecorator: getGenderDecorator(decorator),
  };
}
