import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleInput = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a Restaurant:</label>
          <input
          type='text'
          onChange={this.handleInput}
          value={this.state.text}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
