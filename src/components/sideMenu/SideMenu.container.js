import { connect } from 'react-redux';
import SideMenu from './SideMenu';

const mapStateToProps = ({ menu, location }) =>
  ({ collapsed: menu.collapsed, location });

export default connect(mapStateToProps, null)(SideMenu);
