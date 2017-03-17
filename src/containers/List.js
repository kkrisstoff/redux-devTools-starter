import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/FetchActions';

import Item from '../components/List/Item';

class Chat extends Component {
  onButtonClicked() {
    const post = 'reactjs';
    this.props.dispatch({type: 'USER_FETCH_REQUESTED', payload: {post}});
    //const posts = fetchPosts('reactjs');

  }

  render() {
    const { list } = this.props;

    return (
      <div>
        <ul>
          {list.map((item, i) =>
            <Item key={i} itemText={item.text}/>
          )}
        </ul>
        <button onClick={this.onButtonClicked.bind(this)}>Reload Items</button>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.list
  };
};

const mapDispatch = (dispatch) => bindActionCreators({dispatch}, dispatch);

export default connect(mapState, mapDispatch)(Chat);
