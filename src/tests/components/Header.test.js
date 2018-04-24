import React from 'react';
// react-test-renderer
// shallow render doesn't render child components
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';



test('should render Header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});