import React from 'react';
import { Input, InputNumber, Select, DatePicker, AutoComplete } from 'antd';

import {
  PLACEHOLDERS,
  INTERVIEW_TYPES,
  INTERVIEW_STATUS,
  DATE_FORMAT_PT_BR,
} from './CreateInterviewConstants';

import USER_LIST_MOCK from '../../../mock/user_list';

const Option = Select.Option;

export function getApplicantNameInput() {
  return (
    <Input id="phone_1" type="text" placeholder={PLACEHOLDERS.APPLICANT_NAME} />
  );
}

export function getInterViewTypeSelector() {
  const options = INTERVIEW_TYPES.map(type => (
    <Option key={type.value} value={type.value}>
      {type.label}
    </Option>
  ));

  return <Select placeholder={PLACEHOLDERS.INTERVIEW_TYPE}>{options}</Select>;
}

export function getInterviewStatusSelector() {
  const options = INTERVIEW_STATUS.map(status => (
    <Option key={status.value} value={status.value}>
      {status.label}
    </Option>
  ));

  return <Select placeholder={PLACEHOLDERS.STATUS}>{options}</Select>;
}

export function getDueDatePicker() {
  return (
    <DatePicker
      style={{ width: '100%' }}
      id="due_date"
      format={DATE_FORMAT_PT_BR}
      placeholder={PLACEHOLDERS.DUE_DATE}
    />
  );
}

export function getInterviewerAutoComplete() {
  const userDataSource = USER_LIST_MOCK.map(user => user.full_name);
  return (
    <AutoComplete
      dataSource={userDataSource}
      placeholder={PLACEHOLDERS.INTERVIEWER}
    />
  );
}

export function getScoreInput() {
  return (
    <InputNumber
      style={{ width: '50%' }}
      min={0}
      max={10}
      placeholder={PLACEHOLDERS.SCORES}
    />
  );
}
