import * as types from '../constants/ActionTypes'

export const selectTool = text => ({ type: types.SELECT_TOOL, text });
export const changeSize = text => ({ type: types.CHANGE_SIZE, text });
export const changeColor = text => ({ type: types.CHANGE_COLOR, text });
export const changeImage = text => ({ type: types.CHANGE_IMAGE, text });
export const resetCanvas = text => ({ type: types.RESET_CANVAS, text });
export const saveCanvas = text => ({ type: types.SAVE_CANVAS, text });
