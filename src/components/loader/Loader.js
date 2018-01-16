import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Loader.scss';

const Loader = props => {
  const { loading, fullScreen } = props;

  return (
    <div
      className={classNames(styles.loader, {
        [styles.hidden]: !loading,
        [styles.fullScreen]: fullScreen,
      })}
    >
      <div className={styles.wrapper}>
        <div className={styles.inner} />
        <div className={styles.text}>CARREGANDO...</div>
      </div>
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  fullScreen: PropTypes.bool.isRequired,
};

export default Loader;
