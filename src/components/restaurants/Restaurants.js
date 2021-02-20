import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  renderRestaurant = () =>{
    return this.props.restaurants.map(restaurant =>{
      return <li><Restaurant restaurant={restaurant} remove={this.props.remove}/></li>
    })
  }

  render() {
    return(
      <ul>
        {this.renderRestaurant()}
      </ul>
    );
  }
};

export default Restaurants;