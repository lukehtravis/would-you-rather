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

function mapStateToProps ({ questions }) {
  return {
    questionsStuff: questions
  }
}

export default connect(mapStateToProps)(App)
