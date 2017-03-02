import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/FetchActions';

import Item from '../components/List/Item';

class Chat extends Component {
  sendMessageEvent(text) {
    this.props.sendMessage(text);
  }

  render() {
    const { list } = this.props;

    console.log(fetchPosts('reactjs'));

    // fetchPosts('reactjs').then((data) =>
    //   console.log(data)
    // );
    return (
      <div>
        <ul>
          {list.map((item, i) =>
            <Item key={i} itemText={item.text}/>
          )}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.list
  };
};

const mapDispatch = (dispatch) => bindActionCreators({fetchPosts}, dispatch);

export default connect(mapState, mapDispatch)(Chat);
