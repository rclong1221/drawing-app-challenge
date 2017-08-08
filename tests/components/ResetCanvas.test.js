import React from 'react';
import ResetCanvas from "../../src/components/ResetCanvas";
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import {shallow, mount} from 'enzyme';

describe('ResetCanvas', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ResetCanvas action={jest.fn()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have initial element with class name "btn btn-reset"', () => {
    const tree = shallow(
      <ResetCanvas action={jest.fn()} />
    );
    expect(tree.find('.btn-reset').exists()).toBe(true);
  });

  it('passes defined value to action on click', () => {
    let value;
    let d;
  	let n;
    let v;
    let action = (val) => {
      d = new Date();
    	n = d.getTime();
      v = 'reset' + n.toString();
      value = val;
    };

    const component = renderer.create(
      <ResetCanvas action={action} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // Trigger to callback
    tree.props.onClick();

    // Re-render and test
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(value).toBeDefined();

    // Test value
    expect(value.slice(0,13)).toBe(v.slice(0,13))
  });
})
