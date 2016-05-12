import  {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){

	console.log("Action recieved", action);
	switch (action.type) {
		case FETCH_WEATHER:
		//return [action.payload.data, ...state]
		
		return state.concat([action.payload.data]); //always return a new instance of state
	}

	return state;


}