import React from 'react';
import PropTypes from 'prop-types';
import i18n from '../../i18n';

const Home = props => (
  <div>
    <h1>{i18n.t('HOME')}</h1>
    <button onClick={props.doTest}>Test Redux</button>
    {props.isReduxOn && <h2>Redux is Working Fine :)</h2>}
  </div>
);

Home.propTypes = {
  doTest: PropTypes.func.isRequired,
  isReduxOn: PropTypes.bool.isRequired,
};

export default Home;
