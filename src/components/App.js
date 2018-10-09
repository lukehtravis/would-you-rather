import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Leaderboard from '../components/Leaderboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
      <Leaderboard />
      </div>
    )
  }
}

function mapStateToProps ({questions, users}) {
  return {
    questionsStuff: questions,
    usersStuff: users
  }
}

export default connect(mapStateToProps)(App)
