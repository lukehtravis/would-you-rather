import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
      <p>Hey</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    questionsStuff: state[0],
    usersStuff: state[1]
  }
}

export default connect(mapStateToProps)(App)
