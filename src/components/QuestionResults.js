import React, {Component} from "react"
import {connect} from "react-redux"
import {Route, withRouter} from "react-router-dom"

class QuestionResults extends Component {
  render() {
    return (
      <div className="question-view">
        <div className="question-view-header">
          <h2>Results</h2>
          <div className="question-view-split">
            <div className="question-view-image">
              <img />
            </div>
            <div className="question-view-result">
              <div className="question-view-answer">
                <p className="question-view-text"></p>
                <div className="question-view-percent">

                </div>
                <p className="question-view-count"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authorizedUser, questions, users}, props) {
  const {id} = props.match.params
  return {
    question: questions[id],
    authedUser: authorizedUser
  }
}

export default withRouter(connect(mapStateToProps)(QuestionResults))
