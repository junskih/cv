import React from 'react';

class CVField extends React.Component {
  render() {
    const {
      value
    } = this.props;

    return (
      <p>{value}</p>
    )
  }
}

export default CVField;