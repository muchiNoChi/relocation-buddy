import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import MainView from '@/components/MainView.vue';

describe('MainView.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(MainView, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
