import React from 'react';
import { capitalize } from '../utils';

class CVSection extends React.Component {
  render() {
    const {
      sectionTitle
    } = this.props;

    return (
      <div className='cv-section'>
        <h3 className='cv-section-title'>{capitalize(sectionTitle)}</h3>
        {this.props.children}
      </div>
    );
  }
}

export default CVSection;