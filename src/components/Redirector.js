import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Leaderboard from '../components/Leaderboard'
import Questions from '../components/Questions'
import Question from '../components/Question'
import Login from '../components/Login'
import NewQuestion from '../components/NewQuestion'
import Nav from '../components/Nav'
import Error from '../components/Error'
import { BrowserRouter as Router, Route, Redirect, withRouter, Switch } from 'react-router-dom'

class Redirector extends Component {
  render() {
    return (
        <div>
          {this.props.authedUser ? (
            <div>
              <Switch>
                <Route path='/' exact component={Questions} />
                <Route path='/leaderboard' exact component={Leaderboard} />
                <Route path='/questions/:id' component={Question} />
                <Route path='/newquestion' exact component={NewQuestion} />
                <Route path='/login' exact component={Login} />
                <Route component={Error} />
              </Switch>
            </div>
          ) : (
            <div>
              <Switch>
                {this.props.currentUrl !== '/login' && (
                  <Redirect to="/login" />
                )}
                <Route path='/login' component={Login} />
                <Route component={Error} />
              </Switch>
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
