import React from 'react';
import { capitalize } from '../utils';

class Button extends React.Component {
  render() {
    const {
      name,
      color,
      onClick,
      disabled
    } = this.props;

    return(
      <button
        className={`form-button form-button--${color}`}
        onClick={onClick}
        disabled={disabled}
      >
        {capitalize(name)}
      </button>
    );
  }
}

export default Button;