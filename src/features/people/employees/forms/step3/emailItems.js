import React from 'react';
import { Form, Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';

import * as entries from './step3Entries';
import {
  getEmailDecorator, getEmailTypeDecorator,
} from './step3Decorators';

import { LABELS } from './step3Constants';
import {
  FORM_ITEM_LAYOUT,
} from '../../components/stepFormHelper';

const FormItem = Form.Item;

export const EmailItems = props => {
  const { emails } = props;

  return emails.map((email, idx) => {
    const emailDecorator = getEmailDecorator(
      `email-${idx}.email`,
      props.fieldDecorator,
    );
    const emailTypeDecorator = getEmailTypeDecorator(
      `email-${idx}.type`,
      props.fieldDecorator,
    );

    return (
      <FormItem
        {...FORM_ITEM_LAYOUT}
        label={LABELS.EMAIL}
        key={email.hash}>
        <Row gutter={8}>
          <Col span={12}>
            {emailDecorator(entries.getEmailInput())}
          </Col>
          <Col span={8}>
            {emailTypeDecorator(entries.getEmailSelector())}
          </Col>
          <Col span={4}>
            {emails.length > 1 && (
              <Button
                type="danger"
                onClick={() => props.onRemove(email.hash)}>
              Remover
              </Button>
            )}
          </Col>
        </Row>
      </FormItem>);
  });
};

EmailItems.propTypes = {
  emails: PropTypes.instanceOf(Array).isRequired,
  fieldDecorator: PropTypes.func.isRequired,
  onRemove: PropTypes.func,
};
