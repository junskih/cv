import React from 'react';
import { capitalize } from '../utils';

class Button extends React.Component {
  render() {
    const {
      name,
      onClick
    } = this.props;

    return(
      <button
        className='form-button'
        onClick={onClick}
      >
        {capitalize(name)}
      </button>
    );
  }
}

export default Button;