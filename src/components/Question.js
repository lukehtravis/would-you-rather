import React, {Component} from 'react'
import { withRouter, Route, Redirect, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import {handleAnswerQuestion} from '../actions/users'
import {handleAnswerQuestionQ} from '../actions/questions'
import QuestionResults from '../components/QuestionResults'

class Question extends Component {
  state = {
    radioValue: undefined
  }
  radioClick(e) {
    this.setState({
      radioValue: e.target.value
    })
  }
  handleSubmit() {
    if (this.state.radioValue !== undefined) {
      this.props.dispatch(handleAnswerQuestion(this.props.individualQuestion.id, document.querySelector('input[name="options"]:checked').value, this.props.authedUser))
      this.props.dispatch(handleAnswerQuestionQ(this.props.individualQuestion.id, document.querySelector('input[name="options"]:checked').value, this.props.authedUser))
    } else {
      alert("please select an option and re-submit")
    }
  }
  render() {
    if (!this.props.individualQuestion) {
      return <Switch><Redirect to="/error" /></Switch>
    }

    let listOfPepleWhoAnswered = [...this.props.individualQuestion.optionOne.votes, ...this.props.individualQuestion.optionTwo.votes]
    return (
      <div>
        {!listOfPepleWhoAnswered.includes(this.props.authedUser) ? (
        <div className="question-create">
          <div className="question-create-header">{this.props.individualQuestion.author}</div>
          <div className="questions-create-body">
            <div className="questions-list-question-text">
              <p>Would you rather</p>
              <p><input type="radio" name="options" value="optionOne" onClick={(e) => this.radioClick(e)} />{this.props.individualQuestion.optionOne.text}</p>
              <p>Or</p>
              <p><input type="radio" name="options" value="optionTwo" onClick={(e) => this.radioClick(e)} />{this.props.individualQuestion.optionTwo.text}</p>
              <button onClick={() => this.handleSubmit() }>Submit</button>
            </div>
          </div>
        </div>
        ) : (
          <QuestionResults />
        )}
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
