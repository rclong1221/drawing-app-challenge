import tools from '../../src/reducers/tools';
import { BRUSH, STAMP, ERASER } from "../../src/constants/Tools";

const initialState = {
	tool: BRUSH,
	brush_size: "10",
	brush_color: "#4d4d4d",
	image: 'https://raw.githubusercontent.com/socialtables/drawing-app-challenge/master/public/img/st-icon.png',
	reset: '',
	save: ''
}

describe('tools', function() {
  describe('tools (mainReducer)', function() {
    it('should return the initial state', function() {
      expect(tools(undefined, {})).toEqual((initialState));
    });
  });
  describe('SELECT_TOOL', function () {
    let action = { type: 'SELECT_TOOL', text: 'STAMP' }
    it('should react to action with state for case "SELECT_TOOL"', function()
    {
      expect(tools(initialState, action)).toEqual(Object.assign(
        {},
        initialState,
        {
				  tool: action.text
        }
      ))
    });
  });
  describe('CHANGE_SIZE', function () {
    let action = { type: 'CHANGE_SIZE', text: '12' }
    it('should react to action with state for case "CHANGE_SIZE"', function()
    {
      expect(tools(initialState, action)).toEqual(Object.assign(
        {},
        initialState,
        {
				  brush_size: action.text
        }
      ))
    });
  });
  describe('CHANGE_COLOR', function () {
    let action = { type: 'CHANGE_COLOR', text: '#ffffff' }
    it('should react to action with state for case "CHANGE_COLOR"', function()
    {
      expect(tools(initialState, action)).toEqual(Object.assign(
        {},
        initialState,
        {
				  brush_color: action.text
        }
      ))
    });
  });
  describe('CHANGE_IMAGE', function () {
    let action = { type: 'CHANGE_IMAGE', text: 'http://fakesite.com/123.jpg' }
    it('should react to action with state for case "CHANGE_IMAGE"', function()
    {
      expect(tools(initialState, action)).toEqual(Object.assign(
        {},
        initialState,
        {
				  image: action.text
        }
      ))
    });
  });
  describe('RESET_CANVAS', function () {
    let action = { type: 'RESET_CANVAS', text: 'reset101010' }
    it('should react to action with state for case "RESET_CANVAS"', function()
    {
      expect(tools(initialState, action)).toEqual(Object.assign(
        {},
        initialState,
        {
				  reset: action.text
        }
      ))
    });
  });
  describe('SAVE_CANVAS', function () {
    let action = { type: 'SAVE_CANVAS', text: 'save101010' }
    it('should react to action with state for case "SAVE_CANVAS"', function()
    {
      expect(tools(initialState, action)).toEqual(Object.assign(
        {},
        initialState,
        {
				  save: action.text
        }
      ))
    });
  });
});
