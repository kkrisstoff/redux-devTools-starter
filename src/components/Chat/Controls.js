import React, { PropTypes, Component } from 'react';

export default class Controls extends Component {
    static propTypes = {
        sendMessage: PropTypes.func.isRequired
    };

    handleSubmit(e) {
        e.preventDefault();
        const input = e.target.querySelector('textarea');
        const text = input.value;
        if (text.length) {
            this.props.sendMessage(text);
            input.value = '';
        }
    }

    render() {
        return (
            <div>
                <form action="#" onSubmit={::this.handleSubmit}>
                    <textarea name="message" id="newMessage" cols="30" rows="1"></textarea>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}