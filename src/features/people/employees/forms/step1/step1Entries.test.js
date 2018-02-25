import { shallow, mount } from 'enzyme';
import * as entries from './step1Entries';

describe('feature(StepEntries => STEP 1)', () => {
  it('should create a full name input', () => {
    const wrapper = shallow(entries.getFullNameInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a nickname input', () => {
    const wrapper = shallow(entries.getNickNameInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a gender selector', () => {
    const wrapper = mount(entries.getGenderSelector());
    const selectors = wrapper.find('.ant-select');
    const selector = selectors.first();

    expect(selectors.length).toBe(1);
    expect(selector.type()).toEqual('div');
  });

  it('should create a father name input', () => {
    const wrapper = shallow(entries.getFatherNameInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a mother name input', () => {
    const wrapper = shallow(entries.getMotherNameInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a nationality input', () => {
    const wrapper = shallow(entries.getNationalityInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a birth date picker', () => {
    const wrapper = mount(entries.getBirthDatePicker());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('className')).toEqual(
      'ant-calendar-picker-input ant-input'
    );
  });

  it('should create a marital status selector', () => {
    const wrapper = mount(entries.getMaritalStatusInput());
    const selectors = wrapper.find('.ant-select');
    const selector = selectors.first();

    expect(selectors.length).toBe(1);
    expect(selector.type()).toEqual('div');
  });

  it('should create a spouse name input', () => {
    const wrapper = shallow(entries.getSpouseNameInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a children amount input', () => {
    const wrapper = shallow(entries.getChildrenAmountInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('number');
  });
});
