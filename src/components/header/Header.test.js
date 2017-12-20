import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  const mockToggleMenu = jest.fn();
  const props = { collapsed: false, toggleMenu: mockToggleMenu };
  const header = shallow(<Header {...props} />);

  it('renders properly', () => {
    expect(header).toMatchSnapshot();
  });
});
