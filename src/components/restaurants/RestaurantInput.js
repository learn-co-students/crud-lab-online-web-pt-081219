import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => {this.handleSubmit(event)}} >
          <input 
            onChange={event => this.handleChange(event)}
            type='text' 
            value={this.state.text} />
          <input type='submit' value='Add Restaurant' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
