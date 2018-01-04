import { emailValidator, phoneValidator } from '../stepFormHelper';

const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getPhone1Decorator(decorator) {
  return decorator('phone_1', {
    rules: [
      { required: true, message: REQUIRED_FIELD_MSG },
      { required: false, validator: phoneValidator },
    ],
  });
}

function getPhone2Decorator(decorator) {
  return decorator('phone_2', {
    rules: [
      { required: false, message: REQUIRED_FIELD_MSG },
      { required: true, validator: phoneValidator },
    ],
  });
}

function getPersonalEmailDecorator(decorator) {
  return decorator('personal_email', {
    rules: [
      { required: true, message: REQUIRED_FIELD_MSG },
      { required: true, validator: emailValidator },
    ],
  });
}

function getOfficeEmailDecorator(decorator) {
  return decorator('office_email', {
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
