import React from 'react';
import CVEntry from './CVEntry';
import CVField from './CVField'
import { capitalize } from '../utils';

class CVSection extends React.Component {
  render() {
    const {
      sectionTitle,
      sectionData
    } = this.props;

    let sectionInfo;
    if (Array.isArray(sectionData)) {
      sectionInfo = sectionData.map(entry => {
        return <CVEntry key={entry.id} entryData={entry.fields}/>;
      });
    } else if (typeof sectionData === 'string') {
      sectionInfo = <CVField key={sectionData} value={sectionData} />;
    }

    return (
      <div className='cv-section'>
        <h3 className='cv-section-title'>{capitalize(sectionTitle)}</h3>
        {sectionInfo}
      </div>
    );
  }
}

export default CVSection;