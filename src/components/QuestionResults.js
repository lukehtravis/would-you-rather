import React, {Component} from "react"
import {connect} from "react-redux"
import {Route, withRouter} from "react-router-dom"

class QuestionResults extends Component {

  render() {
    let {question, authedUser, properName, imgUrl} = this.props
    let total = question.optionOne.votes.length + question.optionTwo.votes.length
    return (
      <div className="question-view">
        <div className="question-view-header">
          <p>Asked by {this.props.properName}</p>
        </div>
        <div className="question-view-split">
          <div className="question-view-image">
            <img src={this.props.imgUrl}/>
          </div>
          <div className="question-view-result">
            <h2>Results</h2>
            <div className="question-view-answer">
              <p className="question-view-text"></p>
              <div className="question-view-percent">

              </div>
              <p className="question-view-count"></p>
            </div>
            <div className="question-view-answer">
              <p className="question-view-text"></p>
              <div className="question-view-percent">

              </div>
              <p className="question-view-count">{total}</p>
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
  return {
    question: viewedQuestion,
    authedUser: authenticatedUser,
    properName: users[viewedQuestion.author].name,
    imgUrl: users[viewedQuestion.author].avatarURL
  }
}

export default withRouter(connect(mapStateToProps)(QuestionResults))
