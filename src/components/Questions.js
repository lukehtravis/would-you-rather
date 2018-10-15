import React, {Component} from 'react'
import {connect} from 'react-redux'
import ListedQuestion from './ListedQuestion'

class Questions extends Component {
  render() {
    let answered = []
    let unanswered = []
    // Used to sort questions into answered vs unanswered sections for rendering
    this.props.questionsKeys.map(question => {
      if (this.props.questionsAnswered.includes(this.props.questions[question].id) == true) {
        answered.push(this.props.questions[question])
      } else {
        unanswered.push(this.props.questions[question])
      }
    })
    return (
      <div className="questions-page">
        <div className="questions-list">
          <div className="questions-list-question">
            <p></p>
          </div>
        </div>
        <div className="questions-list">
          {answered.map(question => (
            <div key={question.id} className="questions-list-question">
              <div className="questions-list-header">{question.author}</div>
              <div className="questions-list-body">
                <div>
                  <img />
                </div>
                <div className="questions-list-question-text">
                  <p>Would You Rather</p>
                  <p>{question.optionOne.text}</p>
                  <a>Link To Individual Poll</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="questions-list">
          {unanswered.map(question => (
            <div key={question.id} className="questions-list-question">
              <div className="questions-list-header">{question.author}</div>
              <div className="questions-list-body">
                <div>
                  <img />
                </div>
                <div className="questions-list-question-text">
                  <p>Would You Rather</p>
                  <p>{question.optionOne.text}</p>
                  <a>Link To Individual Poll</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    )
  }
}

function mapStateToProps({questions, authenticatedUser, users}) {
  let questionIds = Object.keys(questions)
  let answers = []
  // If statement necessart because mapStateToProps is run for each action
  if (users[authenticatedUser] != undefined) {
    answers = Object.keys(users[authenticatedUser].answers)
  }
  return {
    questions: questions,
    questionsAnswered: answers,
    questionsKeys: questionIds,
    authedUser: authenticatedUser
  }
}

export default connect(mapStateToProps)(Questions)
