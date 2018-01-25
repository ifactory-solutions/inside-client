import React from 'react';
import { shallow } from 'enzyme';
import { HeaderWithoutRedux } from './Header';

describe('Header', () => {
  const mockToggleMenu = jest.fn();
  const props = { collapsed: false, toggleMenu: mockToggleMenu };
  const header = shallow(<HeaderWithoutRedux {...props} />);

  it('renders properly', () => {
    expect(header).toMatchSnapshot();
  });
});
