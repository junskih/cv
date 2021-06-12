import React from 'react';
import { capitalize } from '../utils';

const CVSection = (props) => {
  const {
    title
  } = props;

  return (
    <div className='cv-section'>
      <h3 className='cv-section-title'>{capitalize(title)}</h3>
      {props.children}
    </div>
  );
};

export default CVSection;