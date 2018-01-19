import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import SideMenu from '../components/sideMenu';
import Header from '../components/header';
import Bread from '../components/breadcrumb';
import { hasToken } from '../utils/token';
import './index.css';

const { Content } = Layout;
class DefaultLayout extends React.Component {
  render() {
    const { component: Component, location, ...rest } = this.props; // eslint-disable-line
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
                  <div
                    style={contentStyle}>
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
  location: PropTypes.object.isRequired, // eslint-disable-line
};

export default withRouter(DefaultLayout);
