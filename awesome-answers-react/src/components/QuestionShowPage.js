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


      <QuestionDetails {...questionData} />
          <h3>Answers</h3>
          <AnswerList answers={questionData.answers} />
        </main>
      )
  }
}

export default QuestionShowPage;
