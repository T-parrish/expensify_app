import React from 'react';
// react-test-renderer
// shallow render doesn't render child components
// import ReactShallowRenderer from 'react-test-renderer/shallow';

// Don't need this line after adding snapshot serializer to config
// import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Header from '../../components/Header';


test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    // pre enzymeToJson format
    // expect(wrapper.find('h1').text()).toBe('Expensify!');
    // pre serializer in jest config format
    // expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
});

// // syntax for ReactShallowRenderer
// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
//     console.log(renderer.getRenderOutput());
// });