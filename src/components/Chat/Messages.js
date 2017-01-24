import React, { PropTypes, Component } from 'react';

export default class Messages extends Component {
    static propTypes = {
        messages: PropTypes.array.isRequired,
    };

    render() {
        console.log(this.props.messages);
        return (
            <div>
                <ul>
                    {this.props.messages.map(message =>
                        <li key={message.id}>{message.text}</li>
                    )}
                </ul>
            </div>
        );
    }
}
