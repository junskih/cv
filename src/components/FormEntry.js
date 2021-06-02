import React from 'react';
import FormField from './FormField';
import Button from './Button';

class FormEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: true,
      editFields: {...this.props.data}
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
      this.props.id,
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
      data
    } = this.props;

    const {
      isEditing
    } = this.state;

    let entryFields = [];
    for (const field in data) {
      entryFields.push(
        <FormField
          key={field}
          isEditing={isEditing}
          placeholder={field}
          value={data[field]}
          handleChange={this.handleChange}
        />
      );
    }

    let buttonName = isEditing ? 'save' : 'edit';
    let buttonHandler = isEditing ? this.handleSave : this.handleEdit;

    return (
      <div className='form-entry'>
        {entryFields}
        <Button
          name={buttonName}
          color='neutral'
          onClick={buttonHandler}
        />
        {this.props.children}
      </div>
    );
  }
}

export default FormEntry;