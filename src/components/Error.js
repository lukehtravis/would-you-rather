import  React, {Component} from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

class Error extends Component {
  render() {
    return (
      <div className="error">
        <p>You've reached a page that doesn't exist. It's an exist-ential crisis! Please navigate via the nav bar</p>
      </div>
    )
  }
}

// Pass in users part of store using destructuring
function mapStateToProps({authenticatedUser}) {
  return {
    authedUser: authenticatedUser
  }
}

export default connect(mapStateToProps)(Error);
