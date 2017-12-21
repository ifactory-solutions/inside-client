import React from 'react';
import { Route } from 'react-router-dom';
import { Layout, Breadcrumb } from 'antd';
import PropTypes from 'prop-types';
import SideMenu from '../components/sideMenu';
import Header from '../components/header';
import './index.css';

const { Content } = Layout;
class DefaultLayout extends React.Component {
  render() {
    const { component: Component, ...rest } = this.props;
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
            <SideMenu />
            <Layout>
              <Header />
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
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
};

export default DefaultLayout;
