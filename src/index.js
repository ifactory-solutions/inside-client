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

import { PageLayout, DefaultLayout } from './layouts/index';

import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { ListMedicalCertificates } from './features/people/medicalCertificates';

import { rootSaga } from './saga/index';

import './utils/jwtTokenInterceptor';
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
            <DefaultLayout
              exact
              path={`${process.env.PUBLIC_URL}/`}
              parent={DefaultLayout}
              component={Home}
            />
            {/* Admin */}
            <DefaultLayout
              exact
              path="/roles/new"
              parent={DefaultLayout}
              component={CreateRole}
            />
            <DefaultLayout
              exact
              path="/roles"
              parent={DefaultLayout}
              component={ListRoles}
            />
            <DefaultLayout
              exact
              path="/permissions"
              parent={DefaultLayout}
              component={ListPermissions}
            />
            {/* Projects */}
            <DefaultLayout
              exact
              path="/projects/new"
              parent={DefaultLayout}
              component={CreateProject}
            />
            <DefaultLayout
              exact
              path="/projects"
              parent={DefaultLayout}
              component={ListProjects}
            />
            {/* Employees */}
            <DefaultLayout
              exact
              path="/employees/new"
              parent={DefaultLayout}
              component={CreateEmployee}
            />
            <DefaultLayout
              exact
              path="/employees"
              parent={DefaultLayout}
              component={ListEmployees}
            />
            {/* Profile */}
            <DefaultLayout
              exact
              path="/profile"
              parent={DefaultLayout}
              component={Profile}
            />
            {/* Careers */}
            <DefaultLayout
              exact
              path="/careers"
              parent={DefaultLayout}
              component={ListCareers}
            />
            {/* Levels */}
            <DefaultLayout
              exact
              path="/levels/new"
              parent={DefaultLayout}
              component={CreateLevel}
            />
            <DefaultLayout
              exact
              path="/levels"
              parent={DefaultLayout}
              component={ListLevels}
            />
            {/* Requests */}
            <DefaultLayout
              exact
              path="/requests"
              parent={DefaultLayout}
              component={ListRequests}
            />
            {/* Badges */}
            <DefaultLayout
              exact
              path="/badges/new"
              parent={DefaultLayout}
              component={CreateBadge}
            />
            <DefaultLayout
              exact
              path="/badges"
              parent={DefaultLayout}
              component={ListBadges}
            />
            {/* Interviews */}
            <DefaultLayout
              exact
              path="/interviews/new"
              parent={DefaultLayout}
              component={CreateInterview}
            />
            <DefaultLayout
              exact
              path="/interviews"
              parent={DefaultLayout}
              component={ListInterviews}
            />
            {/* Vacation */}
            <DefaultLayout
              exact
              path="/vacation"
              parent={DefaultLayout}
              component={ListVacations}
            />
            {/* Medical Certificate */}
            <DefaultLayout
              exact
              path="/medical-certificate"
              parent={DefaultLayout}
              component={ListMedicalCertificates}
            />
            <PageLayout
              exact
              path="/login"
              parent={PageLayout}
              component={Login}
            />
            <PageLayout exact parent={DefaultLayout} component={NotFound} />
          </Switch>
        </div>
      </Router>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
