import PropTypes from 'prop-types';
import React from 'react';

export default class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.title };
  }

  render() {
    const {title} = this.state
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}
