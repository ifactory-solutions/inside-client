export const getActionNames = (type, name) => {
  const actionKey = `${type.toUpperCase()}_${name.toUpperCase()}`;
  const successKey = `${actionKey}_SUCCESS`;
  const failKey = `${actionKey}_FAILS`;
  const action = `${type}/${name}`;

  return {
    [actionKey]: action,
    [successKey]: `${action}/done`,
    [failKey]: `${action}/fail`,
  };
};

export const getReduxActionName = (module, name) =>
  `[REDUX - ${module.toUpperCase()}] ${name.toUpperCase()}`;

export const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };

  switch (argNames.length) {
  case 0:
    break;
  case 1:
    action.payload = args[0];
    break;
  default:
    action.payload = {};
    argNames.forEach((arg, index) => {
      action.payload[argNames[index]] = args[index];
    });
  }

  return action;
};

export const makeDataActionCreator = type => data => ({ type, data });
