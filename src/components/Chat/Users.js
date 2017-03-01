import React, { PropTypes, Component } from 'react';

export default class Users extends Component {
    static propTypes = {
        users: PropTypes.array,
    };

    render() {
        return (
            <div>
                <ul>
                    {this.props.users.map(user =>
                        <li key={user.id}>{user.id}</li>
                    )}
                </ul>
            </div>
        );
    }
}