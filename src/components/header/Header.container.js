// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleMenu } from '../sideMenu/actions';

import Header from './Header';

const mapStateToProps = ({ menu }) =>
  ({ collapsed: menu.collapsed });

export default connect(mapStateToProps, { toggleMenu })(Header);
