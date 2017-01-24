
export function sendMessage(text) {
    return {
        type: 'SEND_MESSAGE',
        payload: {
            text
        }
    }
}
export function getMessages(filter = 'ALL') {
    return {
        type: 'GET_MESSAGES',
        payload: {
            filter
        }
    }
}