import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import enUS from 'antd/lib/locale-provider/en_US';
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
import { Login } from './features/login';
import NotFound from './features/error';
import { ListVacations } from './features/people/vacations';

import DefaultLayout from './layouts/Default';
import PageLayout from './layouts/Page';

import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <Router>
        <div style={{ height: '100%' }}>
          <Switch>
            <DefaultLayout
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={Home} />
            {/* Admin */}
            <DefaultLayout path="/roles/new" component={CreateRole} />
            <DefaultLayout path="/roles" component={ListRoles} />
            {/* Projects */}
            <DefaultLayout path="/projects/new" component={CreateProject} />
            <DefaultLayout path="/projects" component={ListProjects} />
            {/* Employees */}
            <DefaultLayout path="/employees/new" component={CreateEmployee} />
            <DefaultLayout path="/employees" component={ListEmployees} />
            {/* Profile */}
            <DefaultLayout path="/profile" component={Profile} />
            {/* Careers */}
            <DefaultLayout path="/careers" component={ListCareers} />
            {/* Levels */}
            <DefaultLayout path="/levels/new" component={CreateLevel} />
            <DefaultLayout path="/levels" component={ListLevels} />
            {/* Requests */}
            <DefaultLayout path="/requests" component={ListRequests} />
            {/* Badges */}
            <DefaultLayout path="/badges/new" component={CreateBadge} />
            <DefaultLayout path="/badges" component={ListBadges} />
            {/* Interviews */}
            <DefaultLayout path="/interviews/new" component={CreateInterview} />
            <DefaultLayout path="/interviews" component={ListInterviews} />
            {/* Vacation */}
            <DefaultLayout path="/vacation" component={ListVacations} />
            <PageLayout path="/login" component={Login} />
            <DefaultLayout component={NotFound} />
          </Switch>
        </div>
      </Router>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
