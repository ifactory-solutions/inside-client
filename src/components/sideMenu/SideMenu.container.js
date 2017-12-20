import { connect } from 'react-redux';
import SideMenu from './SideMenu';

const mapStateToProps = ({ menu }) =>
  ({ collapsed: menu.collapsed });

export default connect(mapStateToProps, null)(SideMenu);
