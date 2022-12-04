import React, { Component } from 'react';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;
    return (
      <>
        <ul>
          {options.map(option => (
            <li key={option}>
              <button onClick={onLeaveFeedback} name={option}>
                {option[0].toUpperCase() + option.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
