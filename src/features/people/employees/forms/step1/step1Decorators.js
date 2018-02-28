const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getFullNameDecorator(decorator) {
  return decorator('fullName', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getNickNameDecorator(decorator) {
  return decorator('nickname', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getFatherNameDecorator(decorator) {
  return decorator('fatherName', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getMotherNameDecorator(decorator) {
  return decorator('motherName', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getNationalityDecorator(decorator) {
  return decorator('nationality', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getBirthDateDecorator(decorator) {
  return decorator('birthdate', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getMaritalStatusDecorator(decorator) {
  return decorator('maritalStatus', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getGenderDecorator(decorator) {
  return decorator('gender', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getSpouseNameDecorator(decorator) {
  return decorator('spouseName', []);
}

function getChildAmountDecorator(decorator) {
  return decorator('childAmount', []);
}

export function getDecoratorManager(decorator, employee) {
  const { fullName } = employee.personalInfo;

  return {
    fullNameDecorator: getFullNameDecorator(decorator, fullName),
    nickNameDecorator: getNickNameDecorator(decorator),
    fatherNameDecorator: getFatherNameDecorator(decorator),
    motherNameDecorator: getMotherNameDecorator(decorator),
    nationalityDecorator: getNationalityDecorator(decorator),
    birthDateDecorator: getBirthDateDecorator(decorator),
    maritalStatusDecorator: getMaritalStatusDecorator(decorator),
    genderDecorator: getGenderDecorator(decorator),
    spouseNameDecorator: getSpouseNameDecorator(decorator),
    childAmountDecorator: getChildAmountDecorator(decorator),
  };
}
