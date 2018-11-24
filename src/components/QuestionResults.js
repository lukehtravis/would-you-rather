import React, {Component} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"

class QuestionResults extends Component {
  render() {
    let {question, properName, imgUrl, answerChosen} = this.props
    let total = question.optionOne.votes.length + question.optionTwo.votes.length

    return (
      <div className="question-view">
        <div className="question-view-header">
          <p>Asked by {properName}</p>
        </div>
        <div className="question-view-split">
          <div className="question-view-image">
            <img alt="user avatar" src={imgUrl}/>
          </div>
          <div className="question-view-result">
            <h2>Results (Your response highlighted in green)</h2>
            <div id={this.props.answerChosen === "optionOne" ? "selected" : "not-selected"} className="question-view-answer">
              <p className="question-view-text">{question.optionOne.text}</p>
              <div className="question-view-percent">
                {Math.floor((question.optionOne.votes.length / total) * 100)}%
              </div>
              <p className="question-view-count">{question.optionOne.votes.length} out of {total} votes</p>
            </div>
            <div id={this.props.answerChosen === "optionTwo" ? "selected" : "not-selected"} className="question-view-answer">
              <p className="question-view-text">{question.optionTwo.text}</p>
              <div className="question-view-percent">
                {Math.floor((question.optionTwo.votes.length / total) * 100)}%
              </div>
              <p className="question-view-count">{question.optionTwo.votes.length} out of {total} votes</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authenticatedUser, questions, users}, props) {
  const {id} = props.match.params
  let viewedQuestion = questions[id]
  let answerToCurrentQuestion = users[authenticatedUser].answers[viewedQuestion.id]
  return {
    question: viewedQuestion,
    authedUser: authenticatedUser,
    properName: users[viewedQuestion.author].name,
    imgUrl: users[viewedQuestion.author].avatarURL,
    answerChosen: answerToCurrentQuestion
  }
}

export default withRouter(connect(mapStateToProps)(QuestionResults))
