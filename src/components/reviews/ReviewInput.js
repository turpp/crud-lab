import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state={
    text: ''
  }

  handleChange =(event)=>{
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault()
    //get dispatch that was passed in to save to state
    this.props.addReview(this.state.text, this.props.restaurant.id)
    this.setState({
      text: ''
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review</label>
          <input type='text' value={this.state.text} onChange={this.handleChange}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
