import React from 'react';
import FormSection from './FormSection';

class Form extends React.Component {
  render() {
    const {
      state
    } = this.props;

    const formSections = [];
    for (const key in state) {
      formSections.push(<FormSection key={key} title={key} />);
    }

    return (
      <div className='form'>
        {formSections}
      </div>
    );
  }
}

export default Form;