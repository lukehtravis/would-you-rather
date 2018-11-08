import React, {Component} from "react"
import {connect} from "react-redux"
import {setAuthenticatedUser} from '../actions/authenticatedUser'
import {Redirect} from "react-router-dom"

class Login extends Component {
  state = {
    redirect: this.props.authedUser
  }
  handleSubmit() {
    var e = document.getElementById("user-dropdown");
    var user = e.options[e.selectedIndex].value;
    this.props.dispatch(setAuthenticatedUser(user))
    this.props.history.push("/")
  }
  render() {
    return (
      <div className="login-page">
        <div>Please Choose A User to Login As</div>
        <form>
          <select id="user-dropdown">
            <option value="sarahedo">Sarah Edo</option>
            <option value="tylermcginnis">Tyler McGinnis</option>
            <option value="johndoe">John Doe</option>
          </select>
          <button type="submit" onClick={() => this.handleSubmit()}>Submit</button>
        </form>
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
