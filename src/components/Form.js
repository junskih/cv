import React from 'react';
import FormSection from './FormSection';
import FormEntry from './FormEntry';
import Button from './Button';

const Form = (props) => {
  const {
    personal,
    education,
    experience,
    handleAdd,
    handleSave,
    handleDelete
  } = props;
  
  const personalEntry = personal.map(entry => 
    <FormEntry
      key={entry.id}
      id={entry.id}
      sectionTitle={'personal'}
      data={entry.fields}
      handleSave={handleSave}
    />
  );

  const educationEntries = education.map(entry => 
    <FormEntry
      key={entry.id}
      id={entry.id}
      sectionTitle={'education'}
      data={entry.fields}
      handleSave={handleSave}
    >
      <Button
        name='delete'
        color='danger'
        onClick={handleDelete.bind(this, 'education', entry.id)}
        disabled={education.length === 1}
      />
    </FormEntry>
  );

  const experienceEntries = experience.map(entry => 
    <FormEntry
      key={entry.id}
      id={entry.id}
      sectionTitle={'experience'}
      data={entry.fields}
      handleSave={handleSave}
    >
      <Button
        name='delete'
        color='danger'
        onClick={handleDelete.bind(this, 'experience', entry.id)}
        disabled={experience.length === 1}
      />
    </FormEntry>
  );

  return (
    <div className='form'>
      <FormSection
        key={'personal'}
        title={'personal'}
      >
        {personalEntry}
      </FormSection>

      <FormSection
        key={'education'}
        title={'education'}
      >
        {educationEntries}
        <Button
          name='add'
          color='success'
          onClick={handleAdd.bind(this, 'education')}
        />
      </FormSection>

      <FormSection
        key={'experience'}
        title={'experience'}
      >
        {experienceEntries}
        <Button
          name='add'
          color='success'
          onClick={handleAdd.bind(this, 'experience')}
        />
      </FormSection>
    </div>
  );
};

export default Form;