/* eslint no-multi-assign: "error" */
const requestAnimationFrame = global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

export default requestAnimationFrame;
