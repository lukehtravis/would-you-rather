import React, {Component} from 'react'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom'

class Questions extends Component {
  state = {
    showing: "unanswered"
  }
  handleClick = (e) => {
    this.setState(({
      showing: e.target.className
    }))
  }
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
    unanswered.sort(function(a, b){return b.timestamp - a.timestamp});
    answered.sort(function(a, b){return b.timestamp - a.timestamp});
    return (
      <div className="questions-page">
        <div className="questions-toggle">
          <button className="unanswered" onClick={(e) => this.handleClick(e)}>Unanswered</button>
          <button className="answered" onClick={(e) => this.handleClick(e)}>Answered</button>
        </div>
        {this.state.showing == "unanswered" ? (
          <div className="unanswered">
            {unanswered.map(question => (
              <div key={question.id} className="questions-list-question">
                <div className="questions-list-header">{question.author}</div>
                <div className="questions-list-body">
                  <div>
                    <img  />
                  </div>
                  <div className="questions-list-question-text">
                    <p>Would You Rather</p>
                    <p>{question.optionOne.text}</p>
                    <Link to={`/questions/${question.id}`}>Link To Individual Poll</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="answered">
            {answered.map(question => (
              <div key={question.id} className="questions-list-question">
                <div className="questions-list-header">{question.author}</div>
                <div className="questions-list-body">
                  <div className="questions-list-question-text">
                    <p>Would You Rather</p>
                    <p>{question.optionOne.text}</p>
                    <Link to={`/questions/${question.id}`}>Link To Individual Poll</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps({questions, authenticatedUser, users}) {
  let questionIds = Object.keys(questions)
  let answers = []
  // If statement necessary because mapStateToProps is run for each action
  if (users[authenticatedUser] != undefined) {
    answers = Object.keys(users[authenticatedUser].answers)
  }
  return {
    questions: questions,
    questionsAnswered: answers,
    questionsKeys: questionIds,
    authedUser: authenticatedUser,
    users: users
  }
}

export default connect(mapStateToProps)(Questions)
