import { TOGGLE_MENU } from './actions';

const menu = (state = { collapsed: false }, action) => {
  switch (action.type) {
  case TOGGLE_MENU:
    return {
      ...state,
      collapsed: !state.collapsed,
    };
  default:
    return state;
  }
};

export default menu;
