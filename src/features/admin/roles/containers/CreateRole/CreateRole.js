import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Table } from 'antd';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { HORIZONTAL_FORM_LAYOUT } from 'components/ui/Forms';

import { UIInput } from 'components/ui';

import { getDecoratorManager } from './CreateRoleDecorators';
import { getPermissions, postRoles } from '../../actions';

import {
  nameInputProps,
  columns,
  FORM_ITEM_LAYOUT,
  FORM_ITEM_SUBMIT_LAYOUT,
} from './CreateRoleConstants';

const FormItem = Form.Item;

class CreateRole extends React.Component {
  constructor() {
    super();

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnRowChange = this.handleOnRowChange.bind(this);
    this.selectedRows = [];
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
        role.permissions = _.map(this.selectedRows, row => row.id);
        this.props.postRoles(role);
      }
    });
  }

  handleOnRowChange(selectedRowsKeys, selectedRows) {
    this.selectedRows = selectedRows;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { nameDecorator } = getDecoratorManager(getFieldDecorator);

    const rowSelection = {
      onChange: this.handleOnRowChange,

      getCheckboxProps: record => ({
        disabled: false,
        name: record.name,
      }),
    };

    return (
      <Form layout={HORIZONTAL_FORM_LAYOUT} onSubmit={this.handleOnSubmit}>
        <FormItem label="Nome" {...FORM_ITEM_LAYOUT}>
          {nameDecorator(UIInput(nameInputProps))}
        </FormItem>

        <FormItem>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={this.props.permissions}
            rowKey={record => record.id}
          />
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
  permissions: PropTypes.instanceOf(Array).isRequired,
};

const WrappedCreateRoleForm = Form.create()(CreateRole);
const mapStateToProps = ({ roles }) => ({
  permissions: _.values(roles.permissions),
});
export default connect(mapStateToProps, { getPermissions, postRoles })(
  WrappedCreateRoleForm
);
