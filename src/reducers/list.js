const initialState = [{
  text: 'Use Redux',
  marked: false,
  id: 0
}];

export default function (state = initialState, action) {
  switch (action.type) {
  case "ADD_ITEM":
    return [{
      id: (state.length === 0) ? 0 : state[0].id + 1,
      marked: false,
      text: action.text
    }, ...state];

  case "DELETE_ITEM":
    return state.filter(todo =>
      todo.id !== action.id
    );

  case "EDIT_ITEM":
    return state.map(todo =>
      todo.id === action.id ?
        { ...todo, text: action.text } :
        todo
    );

  case "MARK_ITEM":
    return state.map(todo =>
      todo.id === action.id ?
        { ...todo, marked: !todo.marked } :
        todo
    );

  case "MARK_ALL_ITEMS":
    const areAllMarked = state.every(todo => todo.marked);
    return state.map(todo => ({
      ...todo,
      marked: !areAllMarked
    }));

  case "GET_MARKED_ITEMS":
    return state.filter(todo => todo.marked === false);

  default:
    return state;
  }
}
