import React from 'react';
import CVSection from './CVSection';
import CVSidebarEntry from './CVSidebarEntry';
import CVEducationEntry from './CVEducationEntry';
import CVExperienceEntry from './CVExperienceEntry';

class CV extends React.Component {
  render() {
    const {
      state
    } = this.props;

    const personal = state['personal information'][0].fields;

    const education = state['education'].map(entry => {
      return <CVEducationEntry
        key={entry.id}
        degree={entry.fields['degree']}
        institution={entry.fields['institution']}
        from={entry.fields['from']}
        to={entry.fields['to']}
      />
    });

    const experience = state['experience'].map(entry => {
      return <CVExperienceEntry
        key={entry.id}
        title={entry.fields['title']}
        company={entry.fields['employer']}
        from={entry.fields['from']}
        to={entry.fields['to']}
      />
    });
    
    return (
      <div className='cv'>
        <div className='cv-header'>
          <h2>{`${personal['first name']} ${personal['last name']}`}</h2>
          <h4>{personal['title']}</h4>
        </div>

        <div className='cv-sidebar'>
          <div className='cv-sidebar-container'>
            <div className='cv-sidebar-image'></div>
            <CVSection title={'personal details'} >
              <CVSidebarEntry title={'address'} content={personal['address']} />
              <CVSidebarEntry title={'email'} content={personal['email']} />
              <CVSidebarEntry title={'phone number'} content={personal['phone number']} />
            </CVSection>
          </div>
        </div>

        <div className='cv-main'>
          <CVSection title={'description'}>
            <p>{personal['description']}</p>
          </CVSection>

          <CVSection title={'education'}>
            {education}
          </CVSection>

          <CVSection title={'experience'}>
            {experience}
          </CVSection>
        </div>
      </div>
    );
  }
}

export default CV;