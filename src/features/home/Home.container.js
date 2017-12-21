import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { doTest } from 'reducers/testReducer';

import Home from './Home';

const mapStateToProps = ({ testReducer }) =>
  ({ isReduxOn: testReducer.isReduxOn });

const mapDispatchToProps = dispatch => bindActionCreators({ doTest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
