import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Icon } from 'antd';

const { Header } = Layout;
/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
const MyHeader = props => {
  const { collapsed, toggleMenu } = props;
  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <Icon
        className="trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggleMenu}
      />
    </Header>
  );
};

MyHeader.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default MyHeader;
