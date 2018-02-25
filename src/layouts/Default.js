import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

import SideMenu from '../components/sideMenu';
import Header from '../components/header';
import Bread from '../components/breadcrumb';
import Loader from '../components/loader/Loader';
import { hasToken } from '../utils/token';
import {
  pageStartLoadingAction,
  pageStopLoadingAction,
} from './actions/pageActions';
import './index.css';

const { Content } = Layout;
class DefaultLayout extends React.Component {
  render() {
    const { component: Component, loading, location, ...rest } = this.props;

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
                    <Component {...matchProps} />
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
  loading: PropTypes.bool.isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  onEnter: PropTypes.func, // eslint-disable-line
};

function mapStateToProps({ page }) {
  return {
    loading: page.loading,
  };
}

const connectedPage = connect(mapStateToProps, {
  pageStartLoadingAction,
  pageStopLoadingAction,
})(DefaultLayout);

export default withRouter(connectedPage);
