import React, {Component} from "react"
import {connect} from "react-redux"

class Login extends Component {
  render() {
    return (
      <div className="login-page">
        <div>Please Choose A User to Login As</div>
        <select>
          <option value="sarahedo">Sarah Edo</option>
          <option value="tylermcginnis">Tyler McGinnis</option>
          <option value="johndoe">John Doe</option>
        </select>
        <button>Submit</button>
      </div>
    )
  }
}

function mapStateToProps({authenticatedUser}) {
  return {
    authedUser: authenticatedUser
  }
}

export default connect(mapStateToProps)(Login)
