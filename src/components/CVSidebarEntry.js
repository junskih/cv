import React from 'react';
import { capitalize } from '../utils';

class CVSidebarEntry extends React.Component {
  render() {
    const {
      entryTitle,
      entryData
    } = this.props;

    return (
      <div className='cv-sidebar-entry'>
        <p className='cv-sidebar-entry-title'>{capitalize(entryTitle)}</p>
        <p className='cv-sidebar-entry-content'>{entryData}</p>
      </div>
    );
  }
}

export default CVSidebarEntry;