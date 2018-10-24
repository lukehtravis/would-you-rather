import React, {Component} from 'react'
import { Route, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {handleAnswerQuestion} from '../actions/users'



class Question extends Component {
  handleSubmit() {
    this.props.dispatch(handleAnswerQuestion(this.props.individualQuestion.id, document.querySelector('input[name="options"]:checked').value, this.props.authedUser))
  }
  render() {
    return (
      <div>
        <div className="questions-list-question">
          <div className="questions-list-header">{this.props.individualQuestion.author}</div>
          <div className="questions-list-body">
            <div>
              <img />
            </div>
            <div className="questions-list-question-text">
              <p>Would you rather</p>
                <p><input type="radio" name="options" value="optionOne" />{this.props.individualQuestion.optionOne.text}</p>
                <p>Or</p>
                <p><input type="radio" name="options" value="optionTwo" />{this.props.individualQuestion.optionTwo.text}</p>

                <a onClick={() => this.handleSubmit() }>Submit</a>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({users, questions, authenticatedUser}, props) {
  const { id } = props.match.params

  return {
    authedUser: authenticatedUser,
    individualQuestion: questions[id]
  }
}

export default withRouter(connect(mapStateToProps)(Question))
