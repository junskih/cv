import React from 'react';
import { capitalize } from '../utils';

class FormSection extends React.Component {
  render() {
    const {
      title
    } = this.props;

    return (
      <div className='form-section'>
        <h2>{capitalize(title)}</h2>
      </div>
    );
  }
}

export default FormSection;