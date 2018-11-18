import  React, {Component} from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

class Error extends Component {
  render() {
    return (
      <div className="error">
        <NavLink to='/' exact activeClassName='active'>
          Home
        </NavLink>
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
