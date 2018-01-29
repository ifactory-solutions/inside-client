import React from 'react';
import { Layout } from 'antd';

import PropTypes from 'prop-types';
import SideMenu from '../components/sideMenu';
import Header from '../components/header';
import Bread from '../components/breadcrumb';
import './index.css';

const { Content } = Layout;
class DefaultLayout extends React.Component {
  render() {
    const { innerComponent: InnerComponent, location, ...rest } = this.props; // eslint-disable-line
    const contentStyle = {
      padding: 24,
      background: '#fff',
      minHeight: 360,
    };

    return (
      <Layout id="default-layout" style={{ height: '100%' }}>
        <SideMenu location={location} />
        <Layout>
          <Header />
          <Content style={{ margin: '0 16px' }}>
            <Bread />
            <div style={contentStyle}>
              <InnerComponent {...rest} />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

DefaultLayout.propTypes = {
  location: PropTypes.object.isRequired, // eslint-disable-line
};

export default DefaultLayout;
