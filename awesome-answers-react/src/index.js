import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// When creating a react component, make sure to use
// CapitalizedCamelCase. React interprets lower
// components as HTML tags and will try to render as such
// ignoring your component.
function QuestionDetails (props) {
  const {author = {}} = props;
  // To write JavaScript expression inside of JSX,
  // use {} like the {props.title} below.
  // The expression must return:
  // - A string
  // - Or, a number
  // - Or, null/undefined
  // - Or, a React element
  // - Or, an array of React elements
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>By {author.full_name}</p>
      <p><strong>View Count:</strong> {props.view_count}</p>
      <p><strong>Created At:</strong> {props.created_at}</p>
      <p><strong>Updated At:</strong> {props.updated_at}</p>
    </div>
  );
}

// What is your favourite color?
// Red, blue, green, purple, yellow, magenta, hot-pink, etc.


function AnswerDetails (props) {
  const {author = {}} = props;
  return (
    <div>
      <p>{props.title}</p>
      <p>By {author.full_name}</p>
      <p><strong>Created At:</strong> {props.created_at}</p>
    </div>
    // <div></div>
    // You can't return multiple React elements at once.
    // If you want to return, they must nested inside
    // a single React element.
  )
}

function QuestionShowPage () {
// To pass props to React elements, set them with
// "HTML attrbutes" inside JSX. Each attribute will
// act as a property of the component's `props` object.
  return (
    <main className="QuestionShowPage">
      <QuestionDetails
        title="What is your favourite color?"
        body="Red, blue, yellow, magenta, hot-pink, etc."
        author={{full_name: "Jon Snow"}}
        view_count={123}
        created_at={(new Date()).toString()}
        updated_at={(new Date()).toString()}
      />
      <h3>Answers</h3>
      <AnswerDetails
        title="What is your favourite color?"
        author={{full_name: "Jon Snow"}}
        created_at={(new Date()).toString()}
      />
    </main>
  )
}

// When building React applications, we create
// a root component that is the ancestor to all the
// components that we create. And, we render that
// component on the page with `ReactDOM.render()`.
// For this application, the `App` serves that role.
function App () {
  return (
    <QuestionShowPage />
  )
}

ReactDOM.render(
  // JSX tags are translated into React.createElement()
  // function calls which return React elements.
  // The JSX below is equivalent to:
  // `React.createElement(QuestionDetails)`
  <App />,
  document.getElementById('root')
);
registerServiceWorker();























//
