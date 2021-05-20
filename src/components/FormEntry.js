import React from 'react';
import FormField from './FormField';
import Button from './Button';

class FormEntry extends React.Component {
  render() {
    const {
      isEditing,
      fields,
      handleEdit
    } = this.props;

    let entryFields = [];
    for (const field in fields) {
      entryFields.push(
        <FormField
          key={field}
          isEditing={isEditing}
          placeholder={field}
          value={fields[field]}
        />
      );
    }

    return (
      <div className='form-entry'>
        {entryFields}
        <Button name='edit' onClick={handleEdit}/>
      </div>
    );
  }
}

export default FormEntry;