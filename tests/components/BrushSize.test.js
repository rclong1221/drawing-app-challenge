import React from 'react';
import BrushSize from "../../src/components/BrushSize";
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import {shallow, mount} from 'enzyme';

describe('BrushSize', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <BrushSize brush_size='12' action={jest.fn()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have number-input class', () => {
    const tree = shallow(
      <BrushSize brush_size='12' action={jest.fn()} />
    );
    expect(tree.hasClass('number-input')).toEqual(true);
  });

  it('should have number type', () => {
    const tree = mount(
      <BrushSize brush_size='12' action={jest.fn()} />
    );

    let type = (tree.find('input')).prop('type');
    expect(type).toBe('number');
  });

  it('changes value on new prop', () => {
    var value = '10';
    let action = (val) => { value = val; };

    const component = renderer.create(
      <BrushSize brush_size={value} action={action}></BrushSize>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // Trigger to callback
    tree.props.onChange({ target: { value: '12' } });

    // Re-render and test
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
