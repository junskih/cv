import React from 'react';
import FormField from './FormField';
import Button from './Button';

class FormEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
      editFields: {...this.props.entryData.fields}
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEdit() {
    this.setState({isEditing: true});
  }

  handleSave() {
    this.setState({isEditing: false});

    this.props.handleSave(
      this.props.sectionTitle,
      this.props.entryData.id,
      this.state.editFields
    );
  }

  handleChange(field, value) {
    this.setState((state) => {
      return {
        editFields: {
          ...state.editFields,
          [field]: value
        }
      }
    });
  }

  render() {
    const {
      entryData,
      handleDelete
    } = this.props;

    const {
      isEditing
    } = this.state;

    let entryFields = [];
    for (const field in entryData.fields) {
      entryFields.push(
        <FormField
          key={field}
          isEditing={isEditing}
          placeholder={field}
          value={entryData.fields[field]}
          onChange={this.handleChange}
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