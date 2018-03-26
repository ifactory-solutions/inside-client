import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

const { Option } = Select;

export const UISelector = props => {
  const selectorOptions = props.options.map(option => (
    <Option key={option.id} value={option.id}>
      {option.label}
    </Option>
  ));

  return (
    <Select mode={props.mode} placeholder={props.placeholder}>
      {selectorOptions}
    </Select>
  );
};

UISelector.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  placeholder: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};
