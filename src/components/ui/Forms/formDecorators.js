const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

export function getRequiredDecorator(decorator, value) {
  return decorator(value, {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

export function getDecorator(decorator, value, rules = []) {
  return decorator(value, {
    rules,
  });
}
