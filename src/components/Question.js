import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {connect} from 'react-redux'


class Question extends Component {
  render() {
    console.log(this.props.match.params)
    return (
      <div></div>
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

export default connect(mapStateToProps)(Question)
