import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'antd';
import PropTypes from 'prop-types';
import _ from 'lodash';

import {
  FORM_ITEM_LAYOUT,
  FORM_ITEM_SUBMIT_LAYOUT,
  HORIZONTAL_FORM_LAYOUT,
} from 'components/ui/Forms';

import { UIInput } from 'components/ui';

import { getDecoratorManager } from './CreateRoleDecorators';
import { getPermissions, postRoles } from '../../actions';
import { nameInputProps } from './CreateRoleConstants';

const FormItem = Form.Item;

class CreateRole extends React.Component {
  constructor() {
    super();

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentWillMount() {
    this.props.getPermissions();
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const { form } = this.props;
    form.validateFields(error => {
      if (!error) {
        const role = form.getFieldsValue();
        this.props.postRoles(role);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { nameDecorator } = getDecoratorManager(getFieldDecorator);

    return (
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={this.handleOnSubmit}>
        <FormItem label="Nome" {...FORM_ITEM_LAYOUT}>
          {nameDecorator(UIInput(nameInputProps))}
        </FormItem>

        <FormItem {...FORM_ITEM_SUBMIT_LAYOUT}>
          <Button type="primary" htmlType="submit">
            Cadastrar
          </Button>
        </FormItem>
      </Form>
    );
  }
}

CreateRole.propTypes = {
  getPermissions: PropTypes.func.isRequired,
  postRoles: PropTypes.func.isRequired,
  form: PropTypes.instanceOf(Object).isRequired,
};

const WrappedCreateRoleForm = Form.create()(CreateRole);
const mapStateToProps = ({ roles }) => ({
  permissions: _.values(roles.permissions),
});
export default connect(mapStateToProps, { getPermissions, postRoles })(
  WrappedCreateRoleForm
);
