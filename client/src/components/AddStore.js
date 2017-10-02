import React, { PureComponent } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

class AddStore extends PureComponent {
  constructor(props) {
    super();
    this.state = {
      location: {
        coordinates: ['', ''],
        address: ''
      }
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleLatChange(event) {
    this.setState({
      location: {
        ...this.state.location,
        coordinates: [
          event.target.value,
          this.state.location.coordinates[1],
        ]
      }
    });
  }

  handleLngChange(event) {
    this.setState({
      location: {
        ...this.state.location,
        coordinates: [
          this.state.location.coordinates[0],
          event.target.value
        ]
      }
    });
  }

  handleAddressChange(event) {
    this.setState({
      location: {
        ...this.state.location,
        address: event.target.value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.props.match.params.id) {
      axios.post('/api/add', this.state );
    } else {
      axios.post(`/api/add/${this.props.match.params.id}`, { ...this.state, name: 'Test_CHANGED' } );
      this.props.history.push('/');
    }

  }

  render() {
    return (
      <div>
        <h1>ADD_STORE</h1>
        <form>
        <label>
          Name:
          <input
            name="name"
            type="text"
            onChange={(e) => this.handleInputChange(e)} />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            onChange={(e) => this.handleInputChange(e)} />
        </label>
        <br />
        <label>
          Adresse:
          <input
            name="address"
            type="text"
            onChange={(e) => this.handleAddressChange(e)} />
        </label>
        <label>
          Address Lng:
          <input
            name="coordinates[0]"
            type="text"
            onChange={(e) => this.handleLngChange(e)} />
        </label>
        <br />
        <label>
          Address Lat:
          <input
            name="coordinates[1]"
            type="text"
            onChange={(e) => this.handleLatChange(e)} />
        </label>
        <br />
        <input
          type="submit"
          value="SUBMIT"
          onClick={(e) => this.handleSubmit(e)} />
      </form>
      </div>
    )
  }
};

AddStore.propTypes = {
  match: PropTypes.object
};

export default AddStore;
