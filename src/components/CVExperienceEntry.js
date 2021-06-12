import React from 'react';

const CVExperienceEntry = (props) => {
  const {
    title,
    company,
    from,
    to
  } = props;

  return (
    <div className='cv-main-entry'>
      <p className='cv-main-entry-fromto'>{`${from}-${to}`}</p>
      <div className='cv-main-entry-field-container'>
        <p className='cv-main-entry-field'>{title}</p>
        <p className='cv-main-entry-field'>{company}</p>
      </div>
    </div>
  );
};

export default CVExperienceEntry;