import React from 'react';
import { Form, Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';

import * as entries from './step3Entries';
import {
  getPhoneDecorator, getPhoneTypeDecorator,
} from './step3Decorators';

import { LABELS } from './step3Constants';
import {
  FORM_ITEM_LAYOUT,
} from '../../components/stepFormHelper';

const FormItem = Form.Item;

export const TelephoneItems = props => {
  const { telephones } = props;

  return telephones.map((tel, idx) => {
    const phoneDecorator = getPhoneDecorator(
      `tel-${idx}.telephone`,
      props.fieldDecorator,
    );

    const phoneTypeDecorator = getPhoneTypeDecorator(
      `tel-${idx}.type`,
      props.fieldDecorator,
    );

    return (
      <FormItem
        {...FORM_ITEM_LAYOUT}
        label={LABELS.PHONE}
        key={tel.hash}>
        <Row gutter={8}>
          <Col span={12}>
            {phoneDecorator(entries.getPhoneInput())}
          </Col>
          <Col span={8}>
            {phoneTypeDecorator(entries.getPhoneSelector())}
          </Col>
          <Col span={4}>
            {telephones.length > 1 && (
              <Button
                type="danger"
                onClick={() => props.onRemove(tel.hash)}>
              Remover
              </Button>
            )}
          </Col>
        </Row>
      </FormItem>);
  });
};

TelephoneItems.propTypes = {
  telephones: PropTypes.instanceOf(Array).isRequired,
  fieldDecorator: PropTypes.func.isRequired,
  onRemove: PropTypes.func,
};
