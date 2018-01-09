import React from 'react';
import { shallow } from 'enzyme';
import { Row, Button, Table } from 'antd';
import ListVacations from './ListVacations';

describe('feature(ListVacations)', () => {
  const pathHistory = [];
  const push = path => {
    pathHistory.push(path);
  };
  const props = {
    history: { push },
  };
  const wrapper = shallow(<ListVacations.WrappedComponent {...props} />);
  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('has a "new vacation" button', () => {
    const row = wrapper.first(Row);
    const button = row.find(Button);
    expect(row.length).toBe(1);
    expect(button.length).toBe(1);
    expect(button.prop('children')).toBe('Novas Férias');
  });
  it('update prop "history', () => {
    expect(pathHistory.length).toBe(0);
    const row = wrapper.first(Row);
    const button = row.find(Button);
    button.simulate('click');
    expect(pathHistory.length).toBe(1);
    expect(pathHistory[0]).toBe('/vacation/new');
  });
  it('has a "vacation" table', () => {
    const table = wrapper.first(Table);
    expect(table.length).toBe(1);
  });
});
