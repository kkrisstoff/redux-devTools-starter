import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {sendMessage, getMessages} from '../actions/ChatActions';

import Messsages from '../components/Chat/Messages';
import Controls from '../components/Chat/Controls';

class Chat extends Component {
    sendMessageEvent(text) {
        this.props.sendMessage(text);
    }
    getAllMessages() {
        return this.props.chat.messages;
    }
    render() {
        return (
            <div>
                <Messsages messages={this.getAllMessages()} />
                <Controls sendMessage={::this.sendMessageEvent}/>
            </div>
        );
    }
}

const mapState = (state) => {
  return {
      chat: state.chat
  };
};

const mapDispatch = (dispatch) => bindActionCreators({sendMessage, getMessages}, dispatch);

export default connect(mapState, mapDispatch)(Chat);
