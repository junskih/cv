import React, { useState, useEffect } from 'react';
import { capitalize } from '../utils';

const FormField = (props) => {
  const {
    isEditing,
    placeholder,
    value,
    handleChange
  } = props;

  const [fieldValue, setFieldValue] = useState(value);

  useEffect(() => {
    handleChange(placeholder, fieldValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldValue]);
  
  function handleFieldValueChange(e) {
    setFieldValue(e.target.value);
  }

  let field;
  if (isEditing) {
    field = <input
      className='form-field-input'
      type='text'
      placeholder={capitalize(placeholder)}
      value={fieldValue}
      onChange={handleFieldValueChange}
    />
  } else if (fieldValue.trim() === '') {
    field = <p className='form-field-content'>-</p>
  } else {
    field = <p className='form-field-content'>{fieldValue}</p>
  }

  return (
    <div className='form-field'>
      {field}
    </div>
  );
};

export default FormField;