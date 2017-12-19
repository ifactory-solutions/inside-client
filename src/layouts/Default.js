import React from 'react';
import { Route } from 'react-router-dom';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import PropTypes from 'prop-types';
import './index.css';

const SubMenu = Menu.SubMenu;
const { Header, Sider, Content } = Layout;
class DefaultLayout extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
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
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="appstore-o" />
                  <span>Dashboard</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="user" />
                  <span>Perfil</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="team" />
                  <span>Colaboradores</span>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="switcher" />
                  <span>Projetos</span>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={<span><Icon type="solution" />
                    <span>Cargos e Carreiras</span></span>}
                >
                  <Menu.Item key="5">Cargos/Níveis</Menu.Item>
                  <Menu.Item key="6">Carreiras</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
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
