import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon, Menu, Badge } from 'antd';

import { PROFILE } from '../../mock/profile';

import './Header.scss';

const { Header } = Layout;
const { SubMenu } = Menu;
const { user: UserMock } = PROFILE;

const MyHeader = props => {
  const { collapsed, toggleMenu } = props;
  return (
    <Header className="header" style={{ background: '#fff', padding: 0 }}>
      <div>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggleMenu}
        />
      </div>

      <div className={'rightWrapper'}>
        <div className={'button'}>
          <Badge count={0}>
            <Icon type="bell" />
          </Badge>
        </div>

        <div className={'button'}>
          <Badge count={1}>
            <Icon type="message" />
          </Badge>
        </div>

        <Menu mode="horizontal">
          <SubMenu
            title={
              <span>
                <Icon type="user" />
                {UserMock.nickname}
              </span>
            }
          >
            <Menu.Item key="edit_rofile">
              <Icon type="edit" /> Editar Perfil
            </Menu.Item>

            <Menu.Item key="settings">
              <Icon type="setting" /> Configurações
            </Menu.Item>

            <Menu.Item key="logout">
              <Icon type="logout" /> Logout
            </Menu.Item>

            <Menu.Item key="about">
              <Icon type="info-circle-o" /> Sobre
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </Header>
  );
};

MyHeader.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MyHeader;
