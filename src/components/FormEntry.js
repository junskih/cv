import React from 'react';
import FormField from './FormField';
import Button from './Button';

class FormEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleEdit() {
    this.setState({isEditing: true});
  }

  handleSave() {
    this.setState({isEditing: false});
    this.props.handleSave();
  }

  render() {
    const {
      fields,
      handleDelete
    } = this.props;

    const {
      isEditing
    } = this.state;

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

    let buttonName = isEditing ? 'save' : 'edit';
    let buttonHandler = isEditing ? this.handleSave : this.handleEdit;

    return (
      <div className='form-entry'>
        {entryFields}
        <Button name={buttonName} onClick={buttonHandler}/>
        <Button name='delete' onClick={handleDelete}/>
      </div>
    );
  }
}

export default FormEntry;