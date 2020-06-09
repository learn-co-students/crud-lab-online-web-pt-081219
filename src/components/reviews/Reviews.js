import React, { Component } from 'react';
import Review from './Review';

const Reviews = props => {

  const reviews = props.reviews.filter(review => review.restaurantId === props.restaurantId)  
    
  return (
    <ul>{ reviews.map(review => <Review key={review.id} review={review} deleteReview={props.deleteReview} />) }</ul>
  )
}

export default Reviews;