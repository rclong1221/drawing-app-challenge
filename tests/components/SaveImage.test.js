import React from 'react';
import SaveImage from "../../src/components/SaveImage";
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import {shallow, mount} from 'enzyme';

describe('SaveImage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <SaveImage action={jest.fn()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should have initial element with class name "btn btn-save"', () => {
    const tree = shallow(
      <SaveImage action={jest.fn()} />
    );
    expect(tree.find('.btn-save').exists()).toBe(true);
  });

  it('click passes defined value to action', () => {
    let value;
    let d;
  	let n;
    let v;
    let action = (val) => {
      d = new Date();
    	n = d.getTime();
      v = 'save' + n.toString();
      value = val;
    };

    const component = renderer.create(
      <SaveImage action={action} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    tree.props.onClick();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(value).toBeDefined();

    expect(value.slice(0,12)).toBe(v.slice(0,12))
  });
})
