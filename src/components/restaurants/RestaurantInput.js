import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });
  } 

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleOnSubmit}>
          <input 
            name="name"
            type="text"
            value={this.state.text}
            onChange = {this.handleOnChange}
          />
          <input type="submit" className="btn btn-default" />

        </form>
      </div>
    );
  }
};

export default RestaurantInput;
