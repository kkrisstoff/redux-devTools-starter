import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';

import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as TodoActions from '../actions/TodoActions';

class App extends Component {
  render() {
    const { todos, actions } = this.props;

    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}

// function mapState(state) {
//   return {
//     todos: state.todos
//   };
// }
//
// function mapDispatch(dispatch) {
//   return {
//     actions: bindActionCreators(TodoActions, dispatch)
//   };
// }

//export default connect(mapState, mapDispatch)(App);
export default App;
