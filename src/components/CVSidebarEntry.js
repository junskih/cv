import React from 'react';
import { capitalize } from '../utils';

const CVSidebarEntry = (props) => {
  const {
    title,
    content
  } = props;

  return (
    <div className='cv-sidebar-entry'>
      <p className='cv-sidebar-entry-title'>{capitalize(title)}</p>
      <p className='cv-sidebar-entry-content'>{content}</p>
    </div>
  );
};

export default CVSidebarEntry;