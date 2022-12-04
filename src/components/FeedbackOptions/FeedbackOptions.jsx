import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;
    return (
      <>
        {options.map(option => (
          <button onClick={onLeaveFeedback} name={option} key={option}>
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        ))}
      </>
    );
  }
}
