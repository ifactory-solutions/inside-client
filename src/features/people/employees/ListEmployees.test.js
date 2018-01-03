import React from 'react';
import {
  shallow,
} from 'enzyme';
import { Row, Button } from 'antd';
import ListEmployees from './ListEmployees';

describe('feature(ListEmployees)', () => {
  const pathHistory = [];
  const push = path => {
    pathHistory.push(path);
  };
  const props = {
    history: { push },
  };
  const wrapper = shallow(<ListEmployees.WrappedComponent {...props} />);
  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('has a "new employee" button', () => {
    const row = wrapper.first(Row);
    const button = row.find(Button);
    expect(row.length).toBe(1);
    expect(button.length).toBe(1);
    expect(button.prop('children')).toBe('Novo Colaborador');
  });
  it('update prop "history"', () => {
    expect(pathHistory.length).toBe(0);
    const row = wrapper.first(Row);
    const button = row.find(Button);
    button.simulate('click');
    expect(pathHistory.length).toBe(1);
    expect(pathHistory[0]).toBe('/employees/new');
  });
});
