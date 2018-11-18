import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from '../components/Nav'
import Redirector from '../components/Redirector'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div className="app-container">
          <Nav />
          <Redirector />
        </div>
      </Router>
    )
  }
}

function mapStateToProps ({questions, users, authenticatedUser}, props) {
  return {
    questionsStuff: questions,
    usersStuff: users,
    authedUser: authenticatedUser,
  }
}

export default connect(mapStateToProps)(App)
