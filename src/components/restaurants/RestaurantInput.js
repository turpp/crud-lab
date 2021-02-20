import React, { Component } from 'react';

class RestaurantInput extends Component {
  state={
    name: ''
  }

  handleChange = (event) =>{
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.props.addRestaurant(this.state.name)
    this.setState({
      name: ''
    })

  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant</label>
          <input onChange={this.handleChange} type='text' value = {this.state.name}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
