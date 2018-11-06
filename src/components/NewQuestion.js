import React, {Component} from 'react'
import {connect} from 'react-redux'
import Nav from '../components/Nav'
import {saveQuestion} from '../utils/api.js'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }
  handleChange = (e) => {
    const text = e.target.value
    if (e.target.name == "optionOne") {
      this.setState(() => ({
        optionOneText: text
      }))
    }
    if (e.target.name == "optionTwo") {
      this.setState(() => ({
        optionTwoText: text
      }))
    }
  }
  handleSubmit = (e) => {

  }
  render() {
    return (
      <div className="new-question">
        <div className="new-question-interior">
          <div className="new-question-headline">
            <h1>Create New Question</h1>
          </div>
          <div className="new-question-body">
            <p>Type in answer for each field</p>
            <div className="new-question-form">
              <p>Would You Rather</p>
              <div className="new-question-inputs">
                <form>
                  <input type="text" onChange={this.handleChange} name="optionOne" />
                  <p>Or</p>
                  <input type="text" onChange={this.handleChange} name="optionTwo" />
                  <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({authenticatedUser}) {
  return {
    authedUser: authenticatedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)
