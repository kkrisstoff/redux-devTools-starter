export default function (state = [], action){

	switch (action.type) {
	case 'CHANGE_TITLE':
		return action.payload;
	case 'RESET_TITLE':
		return "";
	default:
		return state;
	}
};
