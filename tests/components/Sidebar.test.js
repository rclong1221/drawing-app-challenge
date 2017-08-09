import React from 'react';
import Sidebar from "../../src/components/Sidebar";
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import {shallow, mount} from 'enzyme';

var t = {
  tool: '',
  brush_size: '',
  brush_color: '',
  image: ''
};
var a = {
  selectTool: jest.fn(),
  changeSize: jest.fn(),
  changeColor: jest.fn(),
  changeImage: jest.fn(),
  saveCanvas: jest.fn(),
  resetCanvas: jest.fn()
};

describe('Sidebar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Sidebar
        tools={t}
        actions={a}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})
