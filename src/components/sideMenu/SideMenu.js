import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import pathToRegexp from 'path-to-regexp';
import { arrayToTree, queryArray } from '../../utils';
import menus from '../../mock/menu';
import './SideMenu.css';

const { Sider } = Layout;

/* eslint arrow-body-style: ["error", "always"] */
const SideMenu = ({ collapsed, location }) => {
  // Generate Trees
  const menuTree = arrayToTree(menus.filter(_ => _.mpid !== '-1'), // eslint-disable-line
    'id', 'mpid');
  const levelMap = {};

  // Recursively generate menu
  const getMenus = (menuTreeN) => { // eslint-disable-line
    return menuTreeN.map(item => {
      if (item.children) {
        if (item.mpid) {
          levelMap[item.id] = item.mpid;
        }
        return (
          <Menu.SubMenu
            key={item.id}
            title={<span>
              {item.icon && <Icon type={item.icon} />}
              {<span>{item.name}</span>}
            </span>}
          >
            {getMenus(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={item.id}>
          <Link to={item.route || '#'}>
            {item.icon && <Icon type={item.icon} />}
            {<span>{item.name}</span>}
          </Link>
        </Menu.Item>
      );
    });
  };
  const menuItems = getMenus(menuTree);

  // Look for the selected route
  let currentMenu;
  let defaultSelectedKeys;
  for (let item of menus) { // eslint-disable-line
    if (item.route && pathToRegexp(item.route).exec(location.pathname)) {
      currentMenu = item;
      break;
    }
  }
  const getPathArray = (array, current, pid, id) => {
    let result = [String(current[id])]; // eslint-disable-line
    const getPath = item => {
      if (item && item[pid]) {
        result.unshift(String(item[pid]));
        getPath(queryArray(array, item[pid], id));
      }
    };
    getPath(current);
    return result;
  };

  if (currentMenu) {
    defaultSelectedKeys = getPathArray(menus, currentMenu, 'mpid', 'id');
  }

  if (!defaultSelectedKeys) {
    defaultSelectedKeys = ['1'];
  }

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={250}
    >
      <div className="logo" >
        <div id="logo">
          {collapsed && <span>in</span>}
          {!collapsed && <span>inside</span>}
        </div>
      </div>
      {/* <div>
        <div id="logo">
          <span>inside</span>
        </div>
      </div> */}
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={defaultSelectedKeys}
      >
        {menuItems}
      </Menu>
    </Sider>
  );
};

SideMenu.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired, // eslint-disable-line
};

export default withRouter(SideMenu);
