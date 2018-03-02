import { shallow, mount } from 'enzyme';
import * as entries from './step5Entries';

describe('feature(StepEntries => STEP 5)', () => {
  it('should create a bank name input', () => {
    const wrapper = shallow(entries.getNomeBancoInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a bank branch input', () => {
    const wrapper = shallow(entries.getNumeroAgenciaInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a bank account number input', () => {
    const wrapper = shallow(entries.getNumeroContaInput());
    const inputs = wrapper.find('input');
    const input = inputs.first();

    expect(inputs.length).toBe(1);
    expect(input.prop('type')).toEqual('text');
  });

  it('should create a bank account type selector', () => {
    const wrapper = mount(entries.getTipoContaSelector());
    const selectors = wrapper.find('.ant-select');
    const selector = selectors.first();

    expect(selectors.length).toBe(1);
    expect(selector.type()).toEqual('div');
  });
});
