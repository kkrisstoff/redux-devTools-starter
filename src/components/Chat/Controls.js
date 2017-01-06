import React, { PropTypes, Component } from 'react';

export default class Controls extends Component {
    // static propTypes = {
    //     addTodo: PropTypes.func.isRequired
    // };

    handleSubmit(e) {
        e.preventDefault();
        const text = e.target.querySelector('textarea').value;
        if (text.length) {
            this.props.sendMessage(text);
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