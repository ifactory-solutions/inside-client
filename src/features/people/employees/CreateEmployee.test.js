import React from 'react';
import { shallow, mount } from 'enzyme';
// import { Row, Button } from 'antd';
import CreateEmployee from './CreateEmployee';

describe('feature(CreateEmployee)', () => {
  const pathHistory = [];
  const push = path => {
    pathHistory.push(path);
  };
  const props = {
    history: { push },
  };

  const wrapper = shallow(<CreateEmployee {...props} />);
  const mountedWrapper = mount(<CreateEmployee {...props} />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has a steps container', () => {
    const stepsContainer = mountedWrapper.find('.ant-steps');
    expect(stepsContainer.length).toBe(1);
  });

  it('has four step items', () => {
    const stepItems = mountedWrapper.find('.ant-steps-item');
    expect(stepItems.length).toBe(4);
  });

  it('form should be from step1', () => {
    const form = mountedWrapper.find('form#form-step-1');
    expect(form.length).toBe(1);
  });

  it('step1 should have 11 fields', () => {
    const form = mountedWrapper.find('form#form-step-1');
    const formItems = form.find('.ant-row.ant-form-item');

    expect(formItems.length).toBe(11);
  });

  it('simulated full name item filling', () => {
    const form = mountedWrapper.find('form#form-step-1');
    const formItems = form.find('.ant-row.ant-form-item');
    const fullNameInput = formItems.find('input#fullName');

    fullNameInput.simulate('change', { target: { value: 'Jane Doe' } });
  });

  it('simulated nickname item filling', () => {
    const form = mountedWrapper.find('form#form-step-1');
    const formItems = form.find('.ant-row.ant-form-item');
    const fullNameInput = formItems.find('input#nickname');

    fullNameInput.simulate('change', { target: { value: 'Janny' } });
  });

  it('should have a next button', () => {
    const buttons = mountedWrapper.find('button#next');

    expect(buttons.length).toBe(1);
  });
});
