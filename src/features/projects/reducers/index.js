import _ from 'lodash';
import { GET_PROJECTS_SUCCESS } from '../actions';

const defaultState = {
  projects: [],
};

export const projectsReducer = (state = defaultState, action) => {
  if (!action) return state;

  switch (action.type) {
  case GET_PROJECTS_SUCCESS:
    return {
      ...state,
      projects: _.map(action.response, project => ({
        ...project,
        technologies: project.technologies.join(', '),
      })),
    };
  default:
    return state;
  }
};
