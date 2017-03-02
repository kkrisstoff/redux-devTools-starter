import React, { PropTypes, Component } from 'react';

export default class Item extends Component {
  static propTypes = {
    itemText: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <li>
          <p>{this.props.itemText}</p>
        </li>
      </div>
    );
  }
}
