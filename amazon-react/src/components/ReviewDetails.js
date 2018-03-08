import React from 'react';
import StarRating from './StarRating';
import ReviewList from './ReviewList'

function ReviewDetails (props) {
  // 1em is equal to the font size of the parent tag.
  const style = {
    borderLeft: 'medium solid black',
    padding: '0 0.75em'
  };

  const {
    body,
    rating,
    created_at,
    reviewer = {} } = props;

  const {full_name} = reviewer;


  return (
    <div
      className="ReviewDetails"
      style={style}
    >
      <p>Rating: {rating}</p>
      <StarRating max={5} rating = {rating}/>
      <p>{body}</p>
      <p>{full_name}</p>
      <p>{created_at}</p>


    </div>
    // <div></div>
    // You can't return multiple React elements at once.
    // If you want to return, they must nested inside
    // a single React element.
  )
}

export default ReviewDetails;
