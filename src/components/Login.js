import React, {Component} from "react"
import {connect} from "react-redux"
import {setAuthenticatedUser} from '../actions/authenticatedUser'

class Login extends Component {
  handleSubmit() {
    var e = document.getElementById("user-dropdown");
    var user = e.options[e.selectedIndex].value;
    this.props.dispatch(setAuthenticatedUser(user))
  }
  render() {
    return (
      <div className="login-page">
        <div>Please Choose A User to Login As</div>
        <select id="user-dropdown">
          <option value="sarahedo">Sarah Edo</option>
          <option value="tylermcginnis">Tyler McGinnis</option>
          <option value="johndoe">John Doe</option>
        </select>
        <button onClick={() => this.handleSubmit()}>Submit</button>
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
