import { getActionNames } from 'utils/actionNames';

export const {
  GET_PROJECTS,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_FAILS,
} = getActionNames('get', 'projects');

export const getProjects = () => ({
  type: GET_PROJECTS,
});

export const getProjectsSuccess = result => ({
  type: GET_PROJECTS_SUCCESS,
  payload: result,
});

export const getProjectsFails = error => ({
  type: GET_PROJECTS_FAILS,
  payload: error,
});
