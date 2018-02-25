import React from 'react';

import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import Loader from '../components/loader/Loader';
import {
  pageStartLoadingAction,
  pageStopLoadingAction,
} from './actions/pageActions';

import './index.css';

const { Content } = Layout;

class PageLayout extends React.Component {
  render() {
    const { loading, component: Component, ...rest } = this.props; //eslint-disable-line
    const renderComponent = matchProps => (
      <Layout id="page-layout" style={{ height: '100%' }}>
        <Content>
          <div>
            <Loader loading={loading} fullScreen />
            <Component {...matchProps} />
          </div>
        </Content>
      </Layout>
    );

    return <Route {...rest} render={renderComponent} />;
  }
}

function mapStateToProps({ page }) {
  return {
    loading: page.loading,
  };
}

const connectedPage = connect(mapStateToProps, {
  pageStartLoadingAction,
  pageStopLoadingAction,
})(PageLayout);

export default withRouter(connectedPage);
