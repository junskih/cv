import React from 'react';
import { capitalize } from '../utils';

class FormSection extends React.Component {
  render() {
    const {
      title
    } = this.props;

    return (
      <div className='form-section'>
        <h2 className='form-section-title'>{capitalize(title)}</h2>
        {this.props.children}
      </div>
    );
  }
}

export default FormSection;