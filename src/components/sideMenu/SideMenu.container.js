import { connect } from 'react-redux';
import _ from 'lodash';

import SideMenu from './SideMenu';

const getMenuPermissions = permissions =>
  _.filter(permissions, permission => permission.context === 'Menu');

const mapStateToProps = ({ menu, location, loggedUser }) => ({
  collapsed: menu.collapsed,
  location,
  permissions: getMenuPermissions(loggedUser.permissions),
});

export default connect(mapStateToProps, null)(SideMenu);
