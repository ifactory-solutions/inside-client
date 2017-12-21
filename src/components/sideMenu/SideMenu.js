import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;
/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const SideMenu = props => {
  // debugger // eslint-disable-line
  const { collapsed, location } = props;
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location ? location.pathname : '/']}>
        <Menu.Item key="/">
          <Link to="/">
            <Icon type="appstore-o" />
            <span>Dashboard</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/profile">
          <Link to="/profile">
            <Icon type="user" />
            <span>Perfil</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/employees">
          <Link to="/employees">
            <Icon type="team" />
            <span>Colaboradores</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/projects">
          <Link to="/projects">
            <Icon type="switcher" />
            <span>Projetos</span>
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={<span><Icon type="solution" />
            <span>Cargos e Carreiras</span></span>}
        >
          <Menu.Item key="/levels">
            <Link to="/levels">
              <Icon type="switcher" />
              <span>Cargos/Níveis</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/careers">
            <Link to="/careers">
              <Icon type="switcher" />
              <span>Carreiras</span>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

SideMenu.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  location: PropTypes.isRequired,
};

export default withRouter(SideMenu);
