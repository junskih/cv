import React from 'react';
import { capitalize } from '../utils';
import CVEntry from './CVEntry';

class CVSection extends React.Component {
  render() {
    const {
      sectionTitle,
      sectionData
    } = this.props;

    const sectionEntries = sectionData.map(entry => {
      return <CVEntry key={entry.id} entryData={entry.fields}/>;
    });

    return (
      <div className='cv-section'>
        <h3 className='cv-section-title'>{capitalize(sectionTitle)}</h3>
        {sectionEntries}
      </div>
    );
  }
}

export default CVSection;