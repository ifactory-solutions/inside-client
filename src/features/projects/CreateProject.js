import React from 'react';
import { Form, Input, DatePicker, Button, Tag, Icon, AutoComplete } from 'antd';

const { TextArea } = Input;

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
        'Inglês avançadíssimo'],
    };
  }
  getTechs() {
    return this.state.techs
      .filter(s => this.state.selectedTechs.indexOf(s) === -1);
  }
  handleClose(removedTech) {
    const selectedTechs = this.state.selectedTechs
      .filter(tech => tech !== removedTech);
    this.setState({ selectedTechs });
  }
  saveInputRef = input => {
    this.input = input;
  }
  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }
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
  }
  render() {
    const { getFieldDecorator } = this.props.form; // eslint-disable-line
    const { formLayout, inputVisible } = this.state;
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };

    return (
      <Form layout={formLayout}>
        <FormItem
          label="Nome"
          {...formItemLayout}
        >
          <Input />
        </FormItem>
        <FormItem
          label="Descrição"
          {...formItemLayout}
        >
          <TextArea rows={4} />
        </FormItem>
        <FormItem
          label="Data de Início"
          {...formItemLayout}
        >
          <DatePicker placeholder="Selecione uma data" />
        </FormItem>
        <FormItem
          label="Data de Término"
          {...formItemLayout}
        >
          <DatePicker placeholder="Selecione uma data" />
        </FormItem>
        <FormItem
          label="Tecnologias"
          {...formItemLayout}
        >
          {
            this.state.selectedTechs.map(tech =>
              <Tag
                key={`tech_option${tech}`}
                closable
                afterClose={() => this.handleClose(tech)}>
                {tech}
              </Tag>)
          }
          {inputVisible && (
            <AutoComplete
              ref={this.saveInputRef}
              size="small"
              style={{ width: 200 }}
              dataSource={this.getTechs()}
              placeholder="digita alguma coisa"
              onSelect={this.handleSelectChange}
              filterOption={(inputValue, option) =>
                option.props.children.toUpperCase()
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
          <Button type="primary" htmlType="submit">Cadastrar</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedCreateProjectForm = Form.create()(CreateProject);

export default WrappedCreateProjectForm;
