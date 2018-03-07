import React from 'react';
import Field from './Field';


// What is your favourite color?
// Red, blue, green, purple, yellow, magenta, hot-pink, etc.


function AnswerDetails (props) {
  return (
    <div>
      <p>{props.body}</p>
      <p>By {props.author_full_name}</p>
      <Field name="Created At" value={props.created_at} />
    </div>
    // <div></div>
    // You can't return multiple React elements at once.
    // If you want to return, they must nested inside
    // a single React element.
  )
}

export default AnswerDetails;
