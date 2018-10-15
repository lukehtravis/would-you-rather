import React, {Component} from 'react'
import {connect} from 'react-redux'
import ListedQuestion from './ListedQuestion'

class Questions extends Component {
  render() {
    let answeredQuestions = []
    let unansweredQuestions = []
    return (
      <div className="questions">
        <div className="unanswered-questions-list">

        </div>
        <div className="answered-questions-list">

        </div>
      </div>

    )
  }
}

function mapStateToProps({questions, authenticatedUser, users}) {
  let questionIds = Object.keys(questions)
  if (users[authenticatedUser] != undefined) {
    console.log(users[authenticatedUser].answers)
  }
  return {
    questions: questions,
    questionsAnswered: users[authenticatedUser],
    questionsKeys: questionIds,
    authedUser: authenticatedUser
  }
}

export default connect(mapStateToProps)(Questions)
