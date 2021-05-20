import React from 'react';

class Button extends React.Component {
  render() {
    const {
      name,
      onClick
    } = this.props;

    return(
      <button onClick={onClick}>{name}</button>
    );
  }
}

export default Button;