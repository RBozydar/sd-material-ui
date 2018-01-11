import React from 'react';
import { mount, shallow } from 'enzyme';
import SDMenuItem from '../SDMenuItem.react';

describe('SDMenuItem', () => {
  it('renders', () => {
    const component = shallow(
      <SDMenuItem id='test-id' />
    );
    expect(component.props().id).toEqual('test-id');
    expect(component).toBe.ok;
  });

  it('updates checked correctly', () => {
    const component = shallow(
      <SDMenuItem
        id='test-id'
        checkable={true}
      />
    );

    expect(component.state('checked')).toEqual(false);
    component.setProps({checked: true});
    expect(component.state('checked')).toEqual(true);
  });

  it('handles click events', () => {
    const component = mount(
      <SDMenuItem
        id='test-id'
        checkable={true}
      />
    );

    expect(component.state('checked')).toEqual(false);
    component.find('MenuItem').props().onClick(true);
    expect(component.state('checked')).toEqual(true);
  });
});
