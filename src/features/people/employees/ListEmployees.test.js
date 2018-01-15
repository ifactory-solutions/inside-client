import React from 'react';
import { shallow, mount } from 'enzyme';
import { Row, Col, Button } from 'antd';
import ListEmployees from './ListEmployees';

describe('feature(ListEmployees)', () => {
  const pathHistory = [];
  const push = path => {
    pathHistory.push(path);
  };
  const props = {
    history: { push },
  };
  const shallowWrapper = shallow(<ListEmployees {...props} />);
  const mountWrapper = mount(<ListEmployees {...props} />);

  it('renders properly', () => {
    expect(shallowWrapper).toMatchSnapshot();
  });

  it('has a "new employee" button', () => {
    const row = mountWrapper.first(Row);
    const col = row.first(Col);
    const buttons = col.find(Button);

    const leftButton = buttons.get(0);
    const rightButton = buttons.get(1);

    expect(row.length).toBe(1);
    expect(buttons.length).toBe(2);

    expect(leftButton.props.shape).toBe('circle');
    expect(rightButton.props.children).toBe('Novo Colaborador');
  });

  it('update prop "history"', () => {
    expect(pathHistory.length).toBe(0);
    const row = mountWrapper.first(Row);
    const rightButton = row.find(Button).at(1);

    rightButton.simulate('click');

    expect(pathHistory.length).toBe(1);
    expect(pathHistory[0]).toBe('/employees/new');
  });
});
