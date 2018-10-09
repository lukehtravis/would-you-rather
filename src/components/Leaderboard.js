import  React, {Component} from 'react'
import {connect} from 'react-redux'

class Leaderboard extends Component {
  render() {
    return (
      <div className="leaderboard-box">
        <div className="leaderboard-box-container">
          <div className="leaderboard-avatar">
            <img />
          </div>
          <div className="leaderboard-questions">
            <h3></h3>
            <div className="leaderboard-questions-list">
              <div className="leaderboard-questions-row">
                <span>Type of Question</span><span>#</span>
              </div>
              <div className="leaderboard-questions-row">
                <span>Type of Question</span><span>#</span>
              </div>
            </div>
          </div>
          <div className="leaderboard-score">
            <div></div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stately: state
  }
}

export default connect(mapStateToProps)(Leaderboard);
