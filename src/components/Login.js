import React, {Component} from "react"
import {connect} from "react-redux"
import {setAuthenticatedUser} from '../actions/authenticatedUser'
import {Redirect} from "react-router-dom"

class Login extends Component {
  state = {
    redirect: false
  }
  handleSubmit() {
    var e = document.getElementById("user-dropdown");
    var user = e.options[e.selectedIndex].value;
    this.props.dispatch(setAuthenticatedUser(user))
    this.setState(() => ({
      redirect: true
    }))
  }
  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />
    }
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
