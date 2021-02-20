import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'

class ReviewsContainer extends Component {

  reviewsForResturant = ()=>{
    return this.props.reviews.filter(review => review.restaurantId == this.props.restaurant.id)
  }
  render() {
    // console.log(this.props.reviews)
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant}/>
        <Reviews reviews={this.reviewsForResturant()} removeReview={this.props.removeReview}/>
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
  return {reviews: state.reviews}
}

const mapDispatchToProps=(dispatch)=>{
  return{
    addReview: (formData,restId)=>dispatch({type: 'ADD_REVIEW', payload: formData, restId:restId}),
    removeReview: (id)=> dispatch({type: 'REMOVE_REVIEW', payload: id})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
