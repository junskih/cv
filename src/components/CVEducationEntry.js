import React from 'react';

const CVEducationEntry = (props) => {
  const {
    degree,
    institution,
    from,
    to
  } = props;

  return (
    <div className='cv-main-entry'>
      <p className='cv-main-entry-fromto'>{`${from}-${to}`}</p>
      <div className='cv-main-entry-field-container'>
        <p className='cv-main-entry-field'>{degree}</p>
        <p className='cv-main-entry-field'>{institution}</p>
      </div>
    </div>
  );
};

export default CVEducationEntry;