import React from 'react';
import { shallow } from 'enzyme';

import Panel from '../components/Panel/Panel';

describe('<Panel />', () => {
  it('renders without crashing', () => {
    shallow(<Panel />);
  });
  it('should render a div with the className "component-panel"', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.find('div.component-panel').length).toBe(1);
  });
  it('should render five button divs"', () => {
    const wrapper = shallow(<Panel />);
    expect(wrapper.children().length).toBe(5);
  });
  it('should have a prop called clickHandler that is a function', () => {
    const mockFunction = jest.fn();
    const wrapper = shallow(<Panel clickHandler={mockFunction} />);
    const instance = wrapper.instance();
    expect(typeof instance.props.clickHandler).toBe('function');
  });
});
