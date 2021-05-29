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
        <div>
          <p>{degree}</p>
          <p>{institution}</p>
        </div>
      </div>
    );
  }
}

export default CVEducationEntry;