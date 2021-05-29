import React from 'react';

class CVExperienceEntry extends React.Component {
  render() {
    const {
      title,
      company,
      from,
      to
    } = this.props;

    return (
      <div className='cv-main-entry'>
        <p className='cv-main-entry-fromto'>{`${from}-${to}`}</p>
        <div>
          <p>{title}</p>
          <p>{company}</p>
        </div>
      </div>
    );
  }
}

export default CVExperienceEntry;