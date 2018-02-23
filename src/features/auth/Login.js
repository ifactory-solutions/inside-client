import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import {
  loginRequestAction,
  loginSucceedAction,
  loginErrorAction,
} from './actions/authActions';
import './login.css';

import {
  validateEmail,
  getIconPrefix,
  EMPTY_EMAIL_MSG,
  INVALID_EMAIL_MSG,
  EMPTY_PASSWORD_MSG,
} from './LoginHelper';

import i18n from '../../i18n';

const FormItem = Form.Item;

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.emailValidator = this.emailValidator.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();

    const { form } = this.props;

    form.validateFields(error => {
      if (!error) {
        this.props.loginRequestAction({
          email: form.getFieldValue('username'),
          password: form.getFieldValue('password'),
        });
      }
    });
    return this;
  }

  emailValidator(rule, value, callback) {
    const { form } = this.props;
    const email = form.getFieldValue('username');

    if (validateEmail(email)) {
      callback();
    } else {
      callback(INVALID_EMAIL_MSG);
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const usernameDecorator = getFieldDecorator('username', {
      rules: [
        { required: true, message: EMPTY_EMAIL_MSG },
        { validator: this.emailValidator },
      ],
    });

    const passwordDecorator = getFieldDecorator('password', {
      rules: [{ required: true, message: EMPTY_PASSWORD_MSG }],
    });

    return (
      <div>
        <div className="login-form">
          <div className="logo">
            <h2> Login </h2>
          </div>

          <Form onSubmit={this.handleOnSubmit}>
            <FormItem>
              {usernameDecorator(
                <Input
                  id="userName"
                  prefix={getIconPrefix('user')}
                  type="email"
                  placeholder="E-mail"
                />
              )}
            </FormItem>

            <FormItem>
              {passwordDecorator(
                <Input
                  id="password"
                  prefix={getIconPrefix('lock')}
                  type="password"
                  placeholder="Senha"
                />
              )}
            </FormItem>

            <Button type="primary" htmlType="submit">
              {i18n.t('LOGIN')}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

/* eslint-disable */
Login.propTypes = {
  history: PropTypes.object,
  form: PropTypes.object,
  loginRequestAction: PropTypes.func,
  error: PropTypes.instanceOf(Object),
};
/* eslint-enable */

function mapStateToProps({ login }) {
  return {
    error: login.error,
  };
}

const connectedLoginForm = connect(mapStateToProps, {
  loginRequestAction,
  loginSucceedAction,
  loginErrorAction,
})(Login);

const LoginForm = Form.create()(connectedLoginForm);

export const LoginWithoutRedux = Form.create()(Login);
export default LoginForm;
