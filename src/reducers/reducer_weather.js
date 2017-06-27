import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch (action.type) {
	case FETCH_WEATHER: 
		// return state.concat([action.payload.data]);
		return [action.payload.data, ...state]; //creating a new array, not mutating state
	}
	return state;
}