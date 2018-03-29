import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import _ from 'lodash';

import SideMenu from '../components/sideMenu';
import Header from '../components/header';
import Bread from '../components/breadcrumb';
import Loader from '../components/loader/Loader';
import Unauthorized from '../features/unauthorized';

import { hasToken } from '../utils/token';
import {
  pageStartLoadingAction,
  pageStopLoadingAction,
} from './actions/pageActions';
import { getUserMe } from '../features/admin/users/actions';

import './index.css';

const { Content } = Layout;
class DefaultLayout extends React.Component {
  componentWillMount() {
    this.props.getUserMe();
  }

  hasPermissionToAccess() {
    const { permissions, requiredPermission } = this.props;
    if (!requiredPermission) return true;

    return !!_.find(permissions, requiredPermission);
  }

  render() {
    const {
      component: Component,
      loading,
      location,
      history,
      ...rest
    } = this.props;

    const contentStyle = {
      padding: 24,
      background: '#fff',
      minHeight: 360,
    };

    return (
      <Route
        {...rest}
        render={matchProps => {
          if (!hasToken()) {
            return (
              <Redirect
                to={{
                  pathname: '/login',
                  state: {
                    from: matchProps.location,
                  },
                }}
              />
            );
          }

          return (
            <Layout id="default-layout" style={{ height: '100%' }}>
              <SideMenu location={location} />
              <Layout>
                <Header />
                <Content style={{ margin: '0 16px' }}>
                  <Bread />
                  <Loader loading={loading} fullScreen />
                  <div style={contentStyle}>
                    {!this.hasPermissionToAccess() && (
                      <Unauthorized {...matchProps} />
                    )}
                    {this.hasPermissionToAccess() && (
                      <Component {...matchProps} />
                    )}
                  </div>
                </Content>
              </Layout>
            </Layout>
          );
        }}
      />
    );
  }
}

DefaultLayout.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  getUserMe: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  requiredPermission: PropTypes.instanceOf(Object),
  permissions: PropTypes.instanceOf(Array),
  onEnter: PropTypes.func, // eslint-disable-line
  history: PropTypes.instanceOf(Object).isRequired,
};

DefaultLayout.defaultProps = {
  permissions: [],
  requiredPermission: null,
};

function mapStateToProps({ page, loggedUser }) {
  return {
    loading: page.loading,
    permissions: loggedUser.permissions,
  };
}

const connectedPage = connect(mapStateToProps, {
  pageStartLoadingAction,
  pageStopLoadingAction,
  getUserMe,
})(DefaultLayout);

export default withRouter(connectedPage);
