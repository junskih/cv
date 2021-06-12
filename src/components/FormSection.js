import React from 'react';
import { capitalize } from '../utils';

const FormSection = (props) => {
  const {
    title
  } = props;

  return (
    <div className='form-section'>
      <h2 className='form-section-title'>{capitalize(title)}</h2>
      {props.children}
    </div>
  );
};

export default FormSection;