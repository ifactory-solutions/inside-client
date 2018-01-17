const REQUIRED_FIELD_MSG = 'Este campo é obrigatório';
const MIN_5_CHARS_MSG = 'Campo possui menos de 5 caracteres';
const MIN_10_CHARS_MSG = 'Campo possui menos de 10 caracteres';
const MAX_240_CHARS_MSG = 'Campo possui mais de 240 caracteres';

function getNameDecorator(decorator) {
  return decorator('badge_name', {
    rules: [
      { required: true, message: REQUIRED_FIELD_MSG },
      {
        min: 5,
        message: MIN_5_CHARS_MSG,
      },
    ],
  });
}

function getDescriptionDecorator(decorator) {
  return decorator('badge_description', {
    rules: [
      { required: true, message: REQUIRED_FIELD_MSG },
      {
        min: 10,
        message: MIN_10_CHARS_MSG,
      },
      {
        max: 240,
        message: MAX_240_CHARS_MSG,
      },
    ],
  });
}

export default function getDecoratorManager(decorator) {
  return {
    nameDecorator: getNameDecorator(decorator),
    descriptionDecorator: getDescriptionDecorator(decorator),
  };
}
