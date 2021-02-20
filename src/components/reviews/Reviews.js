import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  renderReview = () =>{
    if(this.props.reviews.length > 0){
    return this.props.reviews.map(review=>{
      return <Review review={review} removeReview={this.props.removeReview}/>
    })
  }
  }
  render() {
    
    return (
      <ul>
       {this.renderReview()}
      </ul>
    );
  }
};

export default Reviews;