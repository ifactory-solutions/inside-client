import React from 'react';
import { Form, Button, Tag, Icon, AutoComplete, message } from 'antd';
import PropTypes from 'prop-types';

import * as entries from './CreateProjectEntries';
import { getDecoratorManager } from './CreateProjectDecorators';

const FormItem = Form.Item;

class CreateProject extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
      inputVisible: false,
      selectedTechs: [],
      techs: [
        'AngularJS',
        'Angular',
        'JavaScript',
        'C#',
        'WSO2',
        'Ruby',
        'Inglês avançadíssimo',
      ],
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  getTechs() {
    return this.state.techs.filter(
      s => this.state.selectedTechs.indexOf(s) === -1
    );
  }

  handleClose(removedTech) {
    const selectedTechs = this.state.selectedTechs.filter(
      tech => tech !== removedTech
    );
    this.setState({ selectedTechs });
  }

  saveInputRef = input => {
    this.input = input;
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleSelectChange = tech => {
    const state = this.state;
    let selectedTechs = state.selectedTechs;
    if (tech && selectedTechs.indexOf(tech) === -1) {
      selectedTechs = [...selectedTechs, tech];
    }
    this.setState({
      selectedTechs,
      inputVisible: false,
    });
  };

  handleOnSubmit(event) {
    event.preventDefault();

    const { form } = this.props;
    form.validateFields(error => {
      if (!error) {
        message.success('Projeto criado com sucesso');
        this.props.history.push('/projects');
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form; // eslint-disable-line
    const decorators = getDecoratorManager(getFieldDecorator);

    const { formLayout, inputVisible } = this.state;

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };

    return (
      <Form layout={formLayout} onSubmit={this.handleOnSubmit}>
        <FormItem label="Nome" {...formItemLayout} hasFeedback>
          {decorators.nameDecorator(entries.getNameInput())}
        </FormItem>
        <FormItem label="Descrição" {...formItemLayout} hasFeedback>
          {decorators.descriptionDecorator(entries.getDescriptionInput())}
        </FormItem>
        <FormItem label="Data de Início" {...formItemLayout} hasFeedback>
          {decorators.startDateDecorator(entries.getStartDatePicker())}
        </FormItem>
        <FormItem label="Data de Término" {...formItemLayout} hasFeedback>
          {decorators.finishDateDecorator(entries.getFinishDatePicker())}
        </FormItem>
        <FormItem label="Tecnologias" {...formItemLayout}>
          {this.state.selectedTechs.map(tech => (
            <Tag
              key={`tech_option${tech}`}
              closable
              afterClose={() => this.handleClose(tech)}
            >
              {tech}
            </Tag>
          ))}
          {inputVisible && (
            <AutoComplete
              ref={this.saveInputRef}
              size="small"
              style={{ width: 200 }}
              dataSource={this.getTechs()}
              placeholder="digita alguma coisa"
              onSelect={this.handleSelectChange}
              filterOption={(inputValue, option) =>
                option.props.children
                  .toUpperCase()
                  .indexOf(inputValue.toUpperCase()) !== -1
              }
            />
          )}
          {!inputVisible && (
            <Tag
              onClick={this.showInput}
              style={{ background: '#fff', borderStyle: 'dashed' }}
            >
              <Icon type="plus" /> Adicionar
            </Tag>
          )}
        </FormItem>
        <FormItem
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 4 },
          }}
        >
          <Button type="primary" htmlType="submit">
            Cadastrar
          </Button>
        </FormItem>
      </Form>
    );
  }
}

CreateProject.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  form: PropTypes.instanceOf(Object).isRequired,
};

const WrappedCreateProjectForm = Form.create()(CreateProject);

export default WrappedCreateProjectForm;
