import { SELECT_TOOL, CHANGE_SIZE, CHANGE_COLOR, CHANGE_IMAGE, RESET_CANVAS, SAVE_CANVAS } from "../constants/ActionTypes";
import { BRUSH } from "../constants/Tools";

const initialState = {
	tool: BRUSH,
	brush_size: "10",
	brush_color: "#4d4d4d",
	image: 'https://raw.githubusercontent.com/socialtables/drawing-app-challenge/master/public/img/st-icon.png',
	reset: '',
	save: ''
}

export default function tools(state = initialState, action) {
	switch (action.type) {
		case CHANGE_SIZE:
			return Object.assign({}, state, {
				brush_size: action.text
			})

		case CHANGE_COLOR:
			return Object.assign({}, state, {
				brush_color: action.text
			})

		case CHANGE_IMAGE:
			return Object.assign({}, state, {
				image: action.text
			})

		case SELECT_TOOL:
			return Object.assign({}, state, {
				tool: action.text
			})

		case RESET_CANVAS:
			return Object.assign({}, state, {
				reset: action.text
			})

		case SAVE_CANVAS:
			return Object.assign({}, state, {
				save: action.text
			})

		default:
			return state
	}
}
