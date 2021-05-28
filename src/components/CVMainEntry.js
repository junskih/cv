import React from 'react';

class CVMainEntry extends React.Component {
  render() {
    const {
      entryData
    } = this.props;

    return (
      <div className='cv-main-entry'>
        <p>{entryData['from']}</p>
        <p>{entryData['to']}</p>
      </div>
    );
  }
}

export default CVMainEntry;