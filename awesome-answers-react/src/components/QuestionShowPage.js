import React from 'react';
import QuestionDetails from './QuestionDetails';
import AnswerDetails from './AnswerDetails';
import AnswerList from './AnswerList';
import questionData from '../questionData';

function QuestionShowPage () {
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

export default QuestionShowPage;
