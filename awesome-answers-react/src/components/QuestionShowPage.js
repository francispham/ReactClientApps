import React, { Component } from 'react';
// React is default import.
// Component (which must import with {}) is named import.

// To export a default, React has to `export default React`
// To export a named import, React does `export { Component }`
// where `Component` is the name of a variable inside
// the React library.

import QuestionDetails from './QuestionDetails';
import AnswerDetails from './AnswerDetails';
import AnswerList from './AnswerList';
import questionData from '../questionData';

class QuestionShowPage extends Component {

  constructor (props) {
  // When class based component is first initialize, the
  // `props` are passed to the constructor. When inside constructor
  // and only when inside, you should use `props` without `this.`.
  super(props);
  // When overriding the Component's constructor, we must
  // always use `super(props);` to call the constructor of
  // the Component class. This configures our component such
  // as setting the `props` on `this`.

  this.state = {
    question: questionData
  };
}
  render () {
    // To pass props to React elements, set them with
    // "HTML attrbutes" inside JSX. Each attribute will
    // act as a property of the component's `props` object.

    // 1rem is == to the font-size of the root tag (<html> ...).
    return (
    <main
      className="QuestionShowPage"
      style={{
        margin: '0 1rem'
      }}
    >
      {/* <QuestionDetails
        title="What is your favourite color?"
        body="Red, blue, yellow, magenta, hot-pink, etc."
        author={{full_name: "Jon Snow"}}
        view_count={123}
        created_at={(new Date()).toString()}
        updated_at={(new Date()).toString()}
      />
      or: */}


      <QuestionDetails {...this.state.question} />
          <h3>Answers</h3>
          <AnswerList answers={this.state.question.answers} />
        </main>
      )
  }
}

export default QuestionShowPage;
