import {
  emailValidator,
  phoneValidator,
} from '../../components/stepFormHelper';

const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

export function getPhoneDecorator(id, decorator) {
  return decorator(id, {
    rules: [
      { required: true, message: REQUIRED_FIELD_MSG },
      { required: true, validator: phoneValidator },
    ],
  });
}

export function getPhoneTypeDecorator(id, decorator) {
  return decorator(id, {
    rules: [
      { required: true, message: REQUIRED_FIELD_MSG },
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
    personalEmailDecorator: getPersonalEmailDecorator(decorator),
    officeEmailDecorator: getOfficeEmailDecorator(decorator),
  };
}
