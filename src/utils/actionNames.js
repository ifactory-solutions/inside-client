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
