import React from 'react';
import PropTypes from 'prop-types';
import icons from './icons';
import './SvgIcon.scss';

const SvgIcon = ({ icon, className }) => {
  const Icon = icons[icon];
  return <Icon className={className} />;
};

SvgIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

SvgIcon.defaultProps = {
  className: 'svg-icon',
};

export default SvgIcon;
