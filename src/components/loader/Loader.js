import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Loader.scss';

const Loader = props => {
  const { loading, fullScreen } = props;
  return (
    <div
      className={classNames('loader', {
        hidden: !loading,
        fullScreen,
      })}
    >
      <div className="wrapper">
        <div className="inner" />
        <div className="text">CARREGANDO...</div>
      </div>
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  fullScreen: PropTypes.bool.isRequired,
};

export default Loader;
