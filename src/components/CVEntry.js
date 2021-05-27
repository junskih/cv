import React from 'react';
import CVField from './CVField';

class CVEntry extends React.Component {
  render() {
    const {
      entryData
    } = this.props;

    let entryFields = [];
    for (const field in entryData) {
      entryFields.push(
        <CVField key={field} value={entryData[field]} />
      );
    }

    return (
      <div className='cv-entry'>
        {entryFields}
      </div>
    );
  }
}

export default CVEntry;