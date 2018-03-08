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

export function getEmailDecorator(id, decorator) {
  return decorator(id, {
    rules: [
      { required: true, message: REQUIRED_FIELD_MSG },
      { required: true, validator: emailValidator },
    ],
  });
}
