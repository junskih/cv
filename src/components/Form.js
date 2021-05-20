import React from 'react';
import FormSection from './FormSection';

class Form extends React.Component {
  render() {
    const {
      state,
      handleEdit
    } = this.props;

    const sections = [];
    for (const sectionTitle in state) {
      sections.push(
        <FormSection
          key={sectionTitle}
          title={sectionTitle}
          sectionData={state[sectionTitle]}
          handleEdit={handleEdit}
        />
      );
    }

    return (
      <div className='form'>
        {sections}
      </div>
    );
  }
}

export default Form;