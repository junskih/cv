import React from 'react';
import { capitalize } from '../utils';

const Button = (props) => {
  const {
    name,
    color,
    onClick,
    disabled
  } = props;

  return(
    <button
      className={`form-button form-button--${color}`}
      onClick={onClick}
      disabled={disabled}
    >
      {capitalize(name)}
    </button>
  );
};

export default Button;