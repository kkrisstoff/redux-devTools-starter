import { sendMessage } from '../actions/ChatActions'

const getID = counter();
const initialState = {
    messages: []
};

export default function (state = initialState, action){
    console.log('chat action: ', action);
    switch (action.type) {
        case 'SEND_MESSAGE':
            return {...state, ...{messages: [...state.messages, {
                id: getID(),
                text: action.payload.text
            }]}};
        case 'GET_MESSAGES':
            return [...state.messages];
        case 'RESET_MESSAGES':
            return {...state, ...{messages: []}};
        default:
            return state;
    }
};

function counter() {
    let count = 1;
    return function () {
        return count++
    }
}