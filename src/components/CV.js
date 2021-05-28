import React from 'react';
import CVMainEntry from './CVMainEntry';
import CVSection from './CVSection';
import CVSidebarEntry from './CVSidebarEntry';

class CV extends React.Component {
  render() {
    const {
      state
    } = this.props;

    const personal = state['personal information'][0].fields;
    const education = state['education'].map(entry => {
      return <CVMainEntry key={entry.id} entryData={entry.fields} />
    });
    const experience = state['experience'].map(entry => {
      return <CVMainEntry key={entry.id} entryData={entry.fields} />
    });
    
    return (
      <div className='cv'>
        <div className='cv-header'>
          <h2>{`${personal['first name']} ${personal['last name']}`}</h2>
          <h4>{personal['title']}</h4>
        </div>
        <div className='cv-sidebar'>
          <CVSection sectionTitle={'personal details'} >
            <CVSidebarEntry entryTitle={'address'} entryData={personal['address']} />
            <CVSidebarEntry entryTitle={'email'} entryData={personal['email']} />
            <CVSidebarEntry entryTitle={'phone number'} entryData={personal['phone number']} />
          </CVSection>
        </div>
        <div className='cv-main'>
          <CVSection sectionTitle={'description'}>
            <p>{personal['description']}</p>
          </CVSection>
          <CVSection sectionTitle={'education'}>
            {education}
          </CVSection>
          <CVSection sectionTitle={'experience'}>
            {experience}
          </CVSection>
        </div>
      </div>
    );
  }
}

export default CV;