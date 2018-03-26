import React from 'react';
import { DatePicker } from 'antd';

import { DATE_FORMAT_PT_BR } from '../uiConstants';

export const UIDatePicker = props => (
  <DatePicker style={{ width: '100%' }} format={DATE_FORMAT_PT_BR} {...props} />
);
