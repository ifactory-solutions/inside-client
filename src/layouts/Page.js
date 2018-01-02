import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import './index.css';

const { Content } = Layout;

class PageLayout extends React.Component {
  render() {
    const { component: Component, ...rest } = this.props; //eslint-disable-line
    const renderComponent = matchProps => (
      <Layout id="page-layout" style={{ height: '100%' }}>
        <Content>
          <div>
            <Component {...matchProps} />
          </div>
        </Content>
      </Layout>
    );

    return <Route {...rest} render={renderComponent} />;
  }
}

export default withRouter(PageLayout);
