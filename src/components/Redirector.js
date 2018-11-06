import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Leaderboard from '../components/Leaderboard'
import Questions from '../components/Questions'
import Question from '../components/Question'
import Login from '../components/Login'
import NewQuestion from '../components/NewQuestion'
import Nav from '../components/Nav'
import { BrowserRouter as Router, Route, Redirect, withRouter } from 'react-router-dom'

class Redirector extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
        <div>
          {this.props.authedUser ? (
            <div>
              <Route path='/' exact component={Questions} />
              <Route path='/leaderboard' exact component={Leaderboard} />
              <Route path='/questions/:id' component={Question} />
              <Route path='/newquestion'component={NewQuestion} />
              <Route path='/login' component={Login} />
            </div>
          ) : (
            <div>
              {this.props.currentUrl !== '/login' && (
                <Redirect to="/login" />
              )}
              <Route path='/login' component={Login} />
            </div>
          )}
        </div>
    )
  }
}

function mapStateToProps ({authenticatedUser}, props) {
  const {pathname} = props.location
  return {
    authedUser: authenticatedUser,
    currentUrl: pathname
  }
}

export default withRouter(connect(mapStateToProps)(Redirector))
