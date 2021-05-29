import React from 'react';
import { capitalize } from '../utils';

class CVSection extends React.Component {
  render() {
    const {
      title
    } = this.props;

    return (
      <div className='cv-section'>
        <h3 className='cv-section-title'>{capitalize(title)}</h3>
        {this.props.children}
      </div>
    );
  }
}

export default CVSection;