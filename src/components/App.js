import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Leaderboard from '../components/Leaderboard'
import Nav from '../components/Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div>
            <Leaderboard />
          </div>
        </div>
      </Router>
    )
  }
}

function mapStateToProps ({questions, users, authenticatedUser}) {
  return {
    questionsStuff: questions,
    usersStuff: users,
    authedUser: authenticatedUser
  }
}

export default connect(mapStateToProps)(App)
