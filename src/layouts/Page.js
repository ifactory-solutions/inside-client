import React from 'react';
import { Layout } from 'antd';

import './index.css';

const { Content } = Layout;

class PageLayout extends React.Component {
  render() {
    const { innerComponent: InnerComponent, ...rest } = this.props; //eslint-disable-line
    console.log(this.props);
    return (
      <Layout id="page-layout" style={{ height: '100%' }}>
        <Content>
          <InnerComponent {...rest} />
        </Content>
      </Layout>
    );
  }
}

export default PageLayout;
