import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Leaderboard from '../components/Leaderboard'
import Questions from '../components/Questions'
import Question from '../components/Question'
import Login from '../components/Login'
import Nav from '../components/Nav'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

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
            <Route path='/questions/:id' component={Question} />
            <Route path='/login' component={Login} />
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
