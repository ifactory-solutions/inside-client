import {
  emailValidator,
  phoneValidator,
} from '../../components/stepFormHelper';

const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getPhone1Decorator(decorator) {
  return decorator('phone1', {
    rules: [
      { required: true, message: REQUIRED_FIELD_MSG },
      { required: true, validator: phoneValidator },
    ],
  });
}

function getPhone2Decorator(decorator) {
  return decorator('phone2', {
    rules: [
      { required: false, message: REQUIRED_FIELD_MSG },
      { required: false, validator: phoneValidator },
    ],
  });
}

function getPersonalEmailDecorator(decorator) {
  return decorator('personalEmail', {
    rules: [
      { required: true, message: REQUIRED_FIELD_MSG },
      { required: true, validator: emailValidator },
    ],
  });
}

function getOfficeEmailDecorator(decorator) {
  return decorator('officeEmail', {
    rules: [{ required: false, validator: emailValidator }],
  });
}

export function getDecoratorManager(decorator) {
  return {
    phone1Decorator: getPhone1Decorator(decorator),
    phone2Decorator: getPhone2Decorator(decorator),
    personalEmailDecorator: getPersonalEmailDecorator(decorator),
    officeEmailDecorator: getOfficeEmailDecorator(decorator),
  };
}
