import * as actions from '../../src/actions/index';
import {
  SELECT_TOOL,
  CHANGE_SIZE,
  CHANGE_COLOR,
  CHANGE_IMAGE,
  RESET_CANVAS,
  SAVE_CANVAS
} from "../../src/constants/ActionTypes";

describe('actions', function() {
  describe('selectTool', function () {
    it('should create an action with type "SELECT_TOOL"', function() {
      expect(actions.selectTool().type).toEqual('SELECT_TOOL');
    });
    it('should pass on the tool that is passed in', function() {
      let tool = 'ERASER';
      expect(actions.selectTool(tool).text).toEqual(tool);
    });
  });
  describe('changeSize', function () {
    it('should create an action with type "CHANGE_SIZE"', function() {
      expect(actions.changeSize().type).toEqual('CHANGE_SIZE');
    });
    it('should pass on the size that is passed in', function() {
      let size = '12';
      expect(actions.changeSize(size).text).toEqual(size);
    });
  });
  describe('changeColor', function () {
    it('should create an action with type "CHANGE_COLOR"', function() {
      expect(actions.changeColor().type).toEqual('CHANGE_COLOR');
    });
    it('should pass on the color that is passed in', function() {
      let color = '#ffffff';
      expect(actions.changeColor(color).text).toEqual(color);
    });
  });
  describe('changeImage', function () {
    it('should create an action with type "CHANGE_IMAGE"', function() {
      expect(actions.changeImage().type).toEqual('CHANGE_IMAGE');
    });
    it('should pass on the image (url) that is passed in', function() {
      let image = 'http://something.com/123.jpg';
      expect(actions.changeImage(image).text).toEqual(image);
    });
  });
  describe('resetCanvas', function () {
    it('should create an action with type "RESET_CANVAS"', function() {
      expect(actions.resetCanvas().type).toEqual('RESET_CANVAS');
    });
    it('should pass on the reset string that is passed in', function() {
      let reset = 'reset121212';
      expect(actions.resetCanvas(reset).text).toEqual(reset);
    });
  });
  describe('saveCanvas', function () {
    it('should create an action with type "SAVE_CANVAS"', function() {
      expect(actions.saveCanvas().type).toEqual('SAVE_CANVAS');
    });
    it('should pass on the save string that is passed in', function() {
      let save = 'save212121';
      expect(actions.saveCanvas(save).text).toEqual(save);
    });
  });
});
