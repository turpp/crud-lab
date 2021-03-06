import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} remove={this.props.removeRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {restaurants: state.restaurants}
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addRestaurant: (formData)=>dispatch({type: 'ADD_RESTAURANT', payload: formData}),
    removeRestaurant: (id)=> dispatch({type: 'REMOVE_RESTAURANT', payload: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
