const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

export function getNameDecorator(decorator) {
  return decorator('project_name', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

export function getDescriptionDecorator(decorator) {
  return decorator('project_description', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

export function getStartDateDecorator(decorator) {
  return decorator('start_date', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

export function getFinishDateDecorator(decorator) {
  return decorator('finish_date', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

export function getDecoratorManager(decorator) {
  return {
    nameDecorator: getNameDecorator(decorator),
    descriptionDecorator: getDescriptionDecorator(decorator),
    startDateDecorator: getStartDateDecorator(decorator),
    finishDateDecorator: getFinishDateDecorator(decorator),
  };
}
