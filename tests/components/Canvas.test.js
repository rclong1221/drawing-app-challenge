import React from 'react';
import Canvas from "../../src/components/Canvas";
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

describe('Canvas', () => {
  it('renders correctly', () => {
    const tree = shallow(
      <Canvas
        save=''
      	reset=''
      	tools={t}
      />
    );
    expect(tree.find('.canvas').first()).toBeDefined();
  });
})
