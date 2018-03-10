import {
  emailValidator,
  phoneValidator,
} from '../../components/stepFormHelper';

const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

export function getPhoneDecorator(id, decorator, initialValue = '') {
  return decorator(id, {
    rules: [
      { required: true, message: REQUIRED_FIELD_MSG },
      { required: true, validator: phoneValidator },
    ],
    initialValue,
  });
}

export function getPhoneTypeDecorator(id, decorator, initialValue = '') {
  return decorator(id, {
    rules: [],
    initialValue,
  });
}

export function getEmailDecorator(id, decorator, initialValue) {
  return decorator(id, {
    rules: [
      { required: true, message: REQUIRED_FIELD_MSG },
      { required: true, validator: emailValidator },
    ],
    initialValue,
  });
}

export function getEmailTypeDecorator(id, decorator, initialValue) {
  return decorator(id, {
    rules: [],
    initialValue,
  });
}
