import React from 'react';
import FormSection from './FormSection';

class Form extends React.Component {
  render() {
    const {
      state,
      handleAdd,
      handleSave,
      handleDelete
    } = this.props;

    const sections = [];
    for (const sectionTitle in state) {
      sections.push(
        <FormSection
          key={sectionTitle}
          title={sectionTitle}
          sectionData={state[sectionTitle]}
          handleAdd={handleAdd}
          handleSave={handleSave}
          handleDelete={handleDelete}
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