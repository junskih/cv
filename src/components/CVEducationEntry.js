import React from 'react';

class CVEducationEntry extends React.Component {
  render() {
    const {
      degree,
      institution,
      from,
      to
    } = this.props;

    return (
      <div className='cv-main-entry'>
        <p className='cv-main-entry-fromto'>{`${from}-${to}`}</p>
        <div className='cv-main-entry-field-container'>
          <p className='cv-main-entry-field'>{degree}</p>
          <p className='cv-main-entry-field'>{institution}</p>
        </div>
      </div>
    );
  }
}

export default CVEducationEntry;