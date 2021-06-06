import React from 'react';
import { capitalize } from '../utils';

class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
    this.props.handleChange(this.props.placeholder, e.target.value);
  }

  render() {
    const {
      isEditing,
      placeholder
    } = this.props;

    const {
      value
    } = this.state;

    let field;
    if (isEditing) {
      field = <input
        className='form-field-input'
        type='text'
        placeholder={capitalize(placeholder)}
        value={value}
        onChange={this.handleChange}
      />
    } else if (value.trim() === '') {
      field = <p className='form-field-content'>-</p>
    } else {
      field = <p className='form-field-content'>{value}</p>
    }

    return (
      <div className='form-field'>
        {field}
      </div>
    );
  }
}

export default FormField;