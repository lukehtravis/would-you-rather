import React, {Component} from 'react'
import {connect} from 'react-redux'
import Nav from '../components/Nav'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
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
                <input type="text" name="optionOne" />
                <p>Or</p>
                <input type="text" name="optionTwo" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps() {
  return {

  }
}

export default connect(mapStateToProps)(NewQuestion)
