import React, {Component} from "react"
import {connect} from "react-redux"
import {setAuthenticatedUser} from '../actions/authenticatedUser'

class Login extends Component {
  state = {
    redirect: this.props.authedUser
  }
  handleSubmit(e) {
    var element = document.getElementById("user-dropdown");
    var user = element.options[element.selectedIndex].value;
    this.props.dispatch(setAuthenticatedUser(user))
    if (this.props.location.state) {
      return this.props.history.push(this.props.location.state.redirectUrl)
    }
    this.props.history.push("/")
  }
  handleLogout(e) {
    e.preventDefault()
    this.props.dispatch(setAuthenticatedUser(null))
  }
  render() {
    let {cleanName} = this.props
    if (cleanName == null) {
      cleanName = "Choose A User"
    }
    return (
      <div className="login-page">
        <div>Please Login To Use the Would You Rather App</div>
        <form>
          <select id="user-dropdown">
            <option value="currentuser">{cleanName} (current)</option>
            <option value="sarahedo">Sarah Edo</option>
            <option value="tylermcginnis">Tyler McGinnis</option>
            <option value="johndoe">John Doe</option>
          </select>
          <button type="submit" onClick={(e) => this.handleSubmit(e)}>Submit</button>
          <button type="submit" onClick={(e) => this.handleLogout(e)}>Logout</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({authenticatedUser, users}) {
  let cleanFullName = null
  if (users[authenticatedUser] !== undefined) {
    cleanFullName = users[authenticatedUser].name
  }
  return {
    authedUser: authenticatedUser,
    cleanName: cleanFullName
  }
}

export default connect(mapStateToProps)(Login)
