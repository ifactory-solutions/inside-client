export const getActionNames = (type, name) => {
  const action = `${type}/${name}`;
  return {
    action,
    success: `${action}/done`,
    fail: `${action}/fail`,
  };
};
