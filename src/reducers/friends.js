import omit from 'lodash/object/omit';

const initialState = {
  isFetching: false,
  didInvalidate: false,
  items: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      const newId = state.friends[state.friends.length-1] + 1;
      return {
        friends: state.friends.concat(newId),
        friendsById: {
          ...state.friendsById,
          [newId]: {
            id: newId,
            name: action.name
          }
        }
      };
    case 'DELETE_FRIEND':
      return {
        ...state,
        friends: state.friends.filter(id => id !== action.id),
        friendsById: omit(state.friendsById, action.id)
      };

    case 'REQUEST_USERS':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case 'RECEIVE_USERS':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.users,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}
