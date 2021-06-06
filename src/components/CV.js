import React from 'react';
import CVSection from './CVSection';
import CVSidebarEntry from './CVSidebarEntry';
import CVEducationEntry from './CVEducationEntry';
import CVExperienceEntry from './CVExperienceEntry';

class CV extends React.Component {
  render() {
    const {
      personal,
      education,
      experience
    } = this.props;

    const personalEntry = personal[0].fields;

    const educationEntries = education.map(entry => 
      <CVEducationEntry
        key={entry.id}
        degree={entry.fields['degree']}
        institution={entry.fields['institution']}
        from={entry.fields['from']}
        to={entry.fields['to']}
      />
    );

    const experienceEntries = experience.map(entry => 
      <CVExperienceEntry
        key={entry.id}
        title={entry.fields['title']}
        company={entry.fields['employer']}
        from={entry.fields['from']}
        to={entry.fields['to']}
      />
    );
    
    return (
      <div className='cv'>
        <div className='cv-header'>
          <h2 className='cv-header-name'>{`${personalEntry['first name']} ${personalEntry['last name']}`}</h2>
          <h4 className='cv-header-title'>{personalEntry['title']}</h4>
        </div>

        <div className='cv-sidebar'>
          <div className='cv-sidebar-container'>
            <div className='cv-sidebar-image'></div>
            <CVSection title={'personal details'} >
              <CVSidebarEntry title={'address'} content={personalEntry['address']} />
              <CVSidebarEntry title={'email'} content={personalEntry['email']} />
              <CVSidebarEntry title={'phone number'} content={personalEntry['phone number']} />
            </CVSection>
          </div>
        </div>

        <div className='cv-main'>
          <CVSection title={'description'}>
            <p className='cv-main-entry-field'>{personalEntry['description']}</p>
          </CVSection>

          <CVSection title={'education'}>
            {educationEntries}
          </CVSection>

          <CVSection title={'experience'}>
            {experienceEntries}
          </CVSection>
        </div>
      </div>
    );
  }
}

export default CV;