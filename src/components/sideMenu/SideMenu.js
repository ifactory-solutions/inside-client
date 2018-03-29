import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import pathToRegexp from 'path-to-regexp';
import { arrayToTree, queryArray } from '../../utils';
import menus from '../../mock/menu';
import './SideMenu.css';

const { Sider } = Layout;

function getMenusForPermissions(menuList, userPermissions) {
  return _.filter(menuList, menu => {
    const menuPermissions = _.filter(userPermissions, p => {
      const { permission } = menu;
      return (
        permission &&
        p.action === permission.action &&
        _.includes(permission.resources, p.resource)
      );
    });
    return !!menuPermissions.length;
  });
}

function makeMenuDataTree(menuList) {
  const validMenus = _.filter(menuList, it => it.menuParentCode !== '-1');
  return arrayToTree(validMenus, 'code', 'menuParentCode');
}

function makeMenuItemTree(menuTree) {
  const levelMap = {};

  return _.map(menuTree, item => {
    if (item.children) {
      if (item.menuParentCode) {
        levelMap[item.code] = item.menuParentCode;
      }
      return (
        <Menu.SubMenu
          key={item.code}
          title={
            <span>
              {item.icon && <Icon type={item.icon} />}
              {<span>{item.name}</span>}
            </span>
          }
        >
          {makeMenuItemTree(item.children)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={item.code}>
        <Link to={item.route || '#'}>
          {item.icon && <Icon type={item.icon} />}
          {<span>{item.name}</span>}
        </Link>
      </Menu.Item>
    );
  });
}

function getPathArray(array, current, pid, id) {
  let result = [String(current[id])]; // eslint-disable-line

  const getPath = item => {
    if (item && item[pid]) {
      result.unshift(String(item[pid]));
      getPath(queryArray(array, item[pid], id));
    }
  };

  getPath(current);
  return result;
}

const SideMenu = ({ collapsed, location, permissions }) => {
  // Generate Trees
  const menusForPermissions = getMenusForPermissions(menus, permissions);
  const menuTree = makeMenuDataTree(menusForPermissions);
  const menuItems = makeMenuItemTree(menuTree);

  // Look for the selected route
  const currentMenu = _.find(
    menus,
    it => it.route && pathToRegexp(it.route).exec(location.pathname)
  );

  const defaultSelectedKeys = currentMenu
    ? getPathArray(menus, currentMenu, 'menuParentCode', 'code')
    : ['1'];

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} width={250}>
      <div className="logo">
        <div id="logo">
          {collapsed && <span>in</span>}
          {!collapsed && <span>inside</span>}
        </div>
      </div>
      <Menu mode="inline" theme="dark" selectedKeys={defaultSelectedKeys}>
        {menuItems}
      </Menu>
    </Sider>
  );
};

SideMenu.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  permissions: PropTypes.instanceOf(Array).isRequired,
  location: PropTypes.object.isRequired, // eslint-disable-line
};

export default withRouter(SideMenu);
