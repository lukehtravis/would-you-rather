import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Leaderboard from '../components/Leaderboard'
import Questions from '../components/Questions'
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
            <Route path='/' exact component={Questions} />
            <Route path='/leaderboard' exact component={Leaderboard} />
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
