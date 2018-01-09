import { shallow } from 'enzyme';
import * as entries from './step3Entries';

describe('feature(StepEntries => STEP 3)', () => {
  it('should create a phone 1 input', () => {
    const wrapper = shallow(entries.getPhone1Input());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a phone 2 input', () => {
    const wrapper = shallow(entries.getPhone2Input());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a personal email input', () => {
    const wrapper = shallow(entries.getPersonalEmailInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('email');
  });

  it('should create a office email input', () => {
    const wrapper = shallow(entries.getOfficeEmailInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('email');
  });
});
