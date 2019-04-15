import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { PropTypes } from 'prop-types';

class PersonForm extends Component {
  constructor(props) {
    super(props);

    this.displayName = 'Person Form Component';
    this.state = {
      name: '',
      birthday: new Date(),
      nationality: '',
    };

    this.handleSubmit = props.handleSubmit;
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onBirthdayChange = date => this.setState({ birthday: date });

  render() {
    const person = { ...this.state };

    return (
      <form onSubmit={event => this.handleSubmit(event, person)}>
        <p>Name:</p>
        <input type="text" name="name" value={person.name} onChange={this.onChange} />
        <p>Birthday:</p>
        <DatePicker
          selected={person.birthday}
          onChange={this.onBirthdayChange}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dateFormat="dd/MM/yyyy"
          dropdownMode="select"
        />
        <p>Nationality:</p>
        <input type="text" name="nationality" value={person.nationality} onChange={this.onChange} />
        <div>
          <input type="submit" className="btn btn-success" value="Submit" />
        </div>
      </form>
    );
  }
}

PersonForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default PersonForm;
