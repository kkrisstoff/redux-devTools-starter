import { sendMessage } from '../actions/ChatActions'

const initialState = {
    messages: []
};

export default function (state = initialState, action){
	switch (action.type) {
        case 'SEND_MESSAGE':
        return {...state, ...{messages: state.messages.push(action.payload.text)}};
    case 'RESET_MESSAGES':
        return {...state, ...{messages: []}};
    default:
        return state;
	}
};
