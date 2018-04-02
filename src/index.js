import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import { Router, Switch } from 'react-router-dom';
import enUS from 'antd/lib/locale-provider/en_US';

import history from './utils/browserHistory';
import Home from './features/home';
import { ListCompanies } from './features/admin/companies';
import { ListRoles, CreateRole, ViewRole } from './features/admin/roles';
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
import { ListPermissions, EditPermissions } from './features/admin/permissions';

import { PageLayout, DefaultLayout } from './layouts/index';

import registerServiceWorker from './registerServiceWorker';
import { ListMedicalCertificates } from './features/people/medicalCertificates';

import './utils/jwtTokenInterceptor';
import './index.css';
import ListClients from './features/clients/ListClients';
import { PERMISSIONS } from './utils/requiredPermissions';

import { store } from './utils/store';

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <Router history={history}>
        <div style={{ height: '100%' }}>
          <Switch>
            <DefaultLayout
              exact
              path={`${process.env.PUBLIC_URL}/`}
              requiredPermission={PERMISSIONS.DASHBOARD.LIST}
              component={Home}
            />
            {/* Admin */}
            <DefaultLayout
              exact
              path="/roles/new"
              requiredPermission={PERMISSIONS.ROLES.CREATE}
              component={CreateRole}
            />
            <DefaultLayout
              exact
              path="/roles"
              requiredPermission={PERMISSIONS.ROLES.LIST}
              component={ListRoles}
            />
            <DefaultLayout
              exact
              path="/roles/:id"
              requiredPermission={PERMISSIONS.ROLES.VIEW}
              component={ViewRole}
            />
            <DefaultLayout
              exact
              path="/permissions"
              requiredPermission={PERMISSIONS.PERMISSIONS.LIST}
              component={ListPermissions}
            />
            <DefaultLayout
              exact
              path="/permissions/:id/edit"
              requiredPermission={PERMISSIONS.PERMISSIONS.UPDATE}
              component={EditPermissions}
            />
            <DefaultLayout
              exact
              path="/companies"
              requiredPermission={PERMISSIONS.COMPANIES.LIST}
              component={ListCompanies}
            />
            {/* Projects */}
            <DefaultLayout
              exact
              path="/projects/new"
              requiredPermission={PERMISSIONS.PROJECTS.CREATE}
              component={CreateProject}
            />
            <DefaultLayout
              exact
              path="/projects"
              requiredPermission={PERMISSIONS.PROJECTS.LIST}
              component={ListProjects}
            />
            {/* Employees */}
            <DefaultLayout
              exact
              path="/employees/new"
              requiredPermission={PERMISSIONS.EMPLOYEES.CREATE}
              component={CreateEmployee}
            />
            <DefaultLayout
              exact
              path="/employees"
              requiredPermission={PERMISSIONS.EMPLOYEES.LIST}
              component={ListEmployees}
            />
            {/* Profile */}
            <DefaultLayout
              exact
              path="/profile"
              requiredPermission={PERMISSIONS.PROFILE.LIST}
              component={Profile}
            />
            {/* Careers */}
            <DefaultLayout
              exact
              path="/careers"
              requiredPermission={PERMISSIONS.CAREERS.LIST}
              component={ListCareers}
            />
            {/* Levels */}
            <DefaultLayout
              exact
              path="/levels/new"
              requiredPermission={PERMISSIONS.LEVELS.CREATE}
              component={CreateLevel}
            />
            <DefaultLayout
              exact
              path="/levels"
              requiredPermission={PERMISSIONS.LEVELS.LIST}
              component={ListLevels}
            />
            {/* Requests */}
            <DefaultLayout
              exact
              path="/requests"
              requiredPermission={PERMISSIONS.REQUESTS.LIST}
              component={ListRequests}
            />
            {/* Badges */}
            <DefaultLayout
              exact
              path="/badges/new"
              requiredPermission={PERMISSIONS.BADGES.CREATE}
              component={CreateBadge}
            />
            <DefaultLayout
              exact
              path="/badges"
              requiredPermission={PERMISSIONS.LIST}
              component={ListBadges}
            />
            {/* Interviews */}
            <DefaultLayout
              exact
              path="/interviews/new"
              requiredPermission={PERMISSIONS.CREATE}
              component={CreateInterview}
            />
            <DefaultLayout
              exact
              path="/interviews"
              requiredPermission={PERMISSIONS.INTERVIEWS.LIST}
              component={ListInterviews}
            />
            {/* Vacation */}
            <DefaultLayout
              exact
              path="/vacation"
              requiredPermission={PERMISSIONS.VACATIONS.LIST}
              component={ListVacations}
            />
            {/* Medical Certificate */}
            <DefaultLayout
              exact
              path="/medical-certificate"
              requiredPermission={PERMISSIONS.MEDICAL_CERTIFICATES.LIST}
              component={ListMedicalCertificates}
            />
            <DefaultLayout
              exact
              path="/clients"
              requiredPermission={PERMISSIONS.CLIENTS.LIST}
              component={ListClients}
            />
            <PageLayout
              exact
              path="/login"
              parent={PageLayout}
              component={Login}
            />
            <DefaultLayout exact component={NotFound} />
          </Switch>
        </div>
      </Router>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
