import React from 'react';
import ToolSelector from "../../src/components/ToolSelector";
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import {shallow, mount} from 'enzyme';

describe('ToolSelector', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <ToolSelector tool="BRUSH" action={jest.fn()} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
