import React, { useEffect, useState } from 'react';
import FormField from './FormField';
import Button from './Button';

const FormEntry = (props) => {
  const {
    id,
    sectionTitle,
    data,
    handleSave
  } = props;

  const [isEditing, setIsEditing] = useState(true);
  const [editFields, setEditFields] = useState(data);

  useEffect(() => {
    handleSave(sectionTitle, id, editFields);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditing]);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleFieldsSave() {
    setIsEditing(false);
  }

  function handleChange(field, value) {
    setEditFields((prevEditFields) => {
      return {
        ...prevEditFields,
        [field]: value
      }
    });
  }

  let entryFields = [];
  for (const field in data) {
    entryFields.push(
      <FormField
        key={field}
        isEditing={isEditing}
        placeholder={field}
        value={data[field]}
        handleChange={handleChange}
      />
    );
  }

  let buttonName = isEditing ? 'save' : 'edit';
  let buttonHandler = isEditing ? handleFieldsSave : handleEdit;

  return (
    <div className='form-entry'>
      {entryFields}
      <Button
        name={buttonName}
        color='neutral'
        onClick={buttonHandler}
      />
      {props.children}
    </div>
  );
};

export default FormEntry;