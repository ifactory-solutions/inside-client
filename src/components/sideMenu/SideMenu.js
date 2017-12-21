import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;
/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const SideMenu = props => {
  const { collapsed } = props;
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
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
  );
};

SideMenu.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default SideMenu;
