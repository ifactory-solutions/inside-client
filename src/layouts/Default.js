import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import SideMenu from '../components/sideMenu';
import Header from '../components/header';
import Bread from '../components/breadcrumb';
import './index.css';

const { Content } = Layout;
class DefaultLayout extends React.Component {
  render() {
    const { component: Component, location, ...rest } = this.props;
    const contentStyle = {
      padding: 24,
      background: '#fff',
      minHeight: 360,
    };
    return (
      <Route
        {...rest}
        render={matchProps => (
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
        )} />
    );
  }
}

DefaultLayout.propTypes = {
  component: PropTypes.element.isRequired,
  location: PropTypes.element.isRequired,
};

export default withRouter(DefaultLayout);
