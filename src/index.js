import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import { Router, Switch } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import enUS from 'antd/lib/locale-provider/en_US';

import history from './browserHistory';
import Home from './features/home';
import { ListRoles, CreateRole } from './features/admin/roles';
import { ListProjects, CreateProject } from './features/projects';
import { ListEmployees, CreateEmployee } from './features/people/employees';
import { Profile } from './features/profile';
import { ListCareers } from './features/careers';
import { ListLevels, CreateLevel } from './features/careers/levels';
import { ListRequests } from './features/careers/requests';
import { ListBadges, CreateBadge } from './features/careers/badges';
import { ListInterviews, CreateInterview } from './features/people/interviews';
import { Login } from './features/auth';
import NotFound from './features/error';
import { ListVacations } from './features/people/vacations';
import { ListPermissions } from './features/admin/permissions';

import { Container, PageLayout, DefaultLayout } from './layouts/index';

import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { ListMedicalCertificates } from './features/people/medicalCertificates';

import { rootSaga } from './saga/index';

import './index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <Router history={history}>
        <div style={{ height: '100%' }}>
          <Switch>
            <Container
              exact
              path={`${process.env.PUBLIC_URL}/`}
              parent={DefaultLayout}
              component={Home}
            />
            {/* Admin */}
            <Container
              path="/roles/new"
              parent={DefaultLayout}
              component={CreateRole}
            />
            <Container
              path="/roles"
              parent={DefaultLayout}
              component={ListRoles}
            />
            <Container
              path="/permissions"
              parent={DefaultLayout}
              component={ListPermissions}
            />
            {/* Projects */}
            <Container
              path="/projects/new"
              parent={DefaultLayout}
              component={CreateProject}
            />
            <Container
              path="/projects"
              parent={DefaultLayout}
              component={ListProjects}
            />
            {/* Employees */}
            <Container
              path="/employees/new"
              parent={DefaultLayout}
              component={CreateEmployee}
            />
            <Container
              path="/employees"
              parent={DefaultLayout}
              component={ListEmployees}
            />
            {/* Profile */}
            <Container
              path="/profile"
              parent={DefaultLayout}
              component={Profile}
            />
            {/* Careers */}
            <Container
              path="/careers"
              parent={DefaultLayout}
              component={ListCareers}
            />
            {/* Levels */}
            <Container
              path="/levels/new"
              parent={DefaultLayout}
              component={CreateLevel}
            />
            <Container
              path="/levels"
              parent={DefaultLayout}
              component={ListLevels}
            />
            {/* Requests */}
            <Container
              path="/requests"
              parent={DefaultLayout}
              component={ListRequests}
            />
            {/* Badges */}
            <Container
              path="/badges/new"
              parent={DefaultLayout}
              component={CreateBadge}
            />
            <Container
              path="/badges"
              parent={DefaultLayout}
              component={ListBadges}
            />
            {/* Interviews */}
            <Container
              path="/interviews/new"
              parent={DefaultLayout}
              component={CreateInterview}
            />
            <Container
              path="/interviews"
              parent={DefaultLayout}
              component={ListInterviews}
            />
            {/* Vacation */}
            <Container
              path="/vacation"
              parent={DefaultLayout}
              component={ListVacations}
            />
            {/* Medical Certificate */}
            <Container
              path="/medical-certificate"
              parent={DefaultLayout}
              component={ListMedicalCertificates}
            />
            <Container path="/login" parent={PageLayout} component={Login} />
            <Container parent={DefaultLayout} component={NotFound} />
          </Switch>
        </div>
      </Router>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
