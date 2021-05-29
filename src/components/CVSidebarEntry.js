import React from 'react';
import { capitalize } from '../utils';

class CVSidebarEntry extends React.Component {
  render() {
    const {
      title,
      content
    } = this.props;

    return (
      <div className='cv-sidebar-entry'>
        <p className='cv-sidebar-entry-title'>{capitalize(title)}</p>
        <p className='cv-sidebar-entry-content'>{content}</p>
      </div>
    );
  }
}

export default CVSidebarEntry;