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
        type='text'
        placeholder={capitalize(placeholder)}
        value={value}
        onChange={this.handleChange}
      />
    } else if (value.trim() === '') {
      field = <p>-</p>
    } else {
      field = <p>{value}</p>
    }

    return (
      <div className='form-field'>
        {field}
      </div>
    );
  }
}

export default FormField;