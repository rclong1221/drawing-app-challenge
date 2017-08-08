import React from 'react';
import BrushColor from "../../src/components/BrushColor";
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import {shallow, mount} from 'enzyme';

describe('BrushColor', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <BrushColor brush_color='#fff' action={jest.fn()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have color-input class', () => {
    const tree = shallow(
      <BrushColor brush_color='#fff' action={jest.fn()} />
    );
    expect(tree.hasClass('color-input')).toEqual(true);
  });

  it('should have color type', () => {
    const tree = mount(
      <BrushColor brush_color='#fff' action={jest.fn()} />
    );

    let type = (tree.find('input')).prop('type');
    expect(type).toBe('color');
  });

  it('changes value on new prop', () => {
    let value = '#fff';
    let action = (val) => { value = val; };

    const component = renderer.create(
      <BrushColor brush_color={value} action={action} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // Trigger to callback
    tree.props.onChange({ target: { value: '#000' } });

    // Re-render and test
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
