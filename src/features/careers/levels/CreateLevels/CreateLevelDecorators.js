const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';

function getNameDecorator(decorator) {
  return decorator('level_name', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

function getDescriptionDecorator(decorator) {
  return decorator('level_description', {
    rules: [{ required: true, message: REQUIRED_FIELD_MSG }],
  });
}

export default function getDecoratorManager(decorator) {
  return {
    nameDecorator: getNameDecorator(decorator),
    descriptionDecorator: getDescriptionDecorator(decorator),
  };
}
