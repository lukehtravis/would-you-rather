import  React, {Component} from 'react'
import {connect} from 'react-redux'

class LeaderboardIndividual extends Component {
  render() {
    return (
      <div className="leaderboard-box-container">
        <div className="leaderboard-avatar">
          <img />
        </div>
        <div className="leaderboard-questions">
          <h3>{this.props.userData.name}</h3>
          <div className="leaderboard-questions-list">
            <div className="leaderboard-answered-questions">
              <span>Answered Question</span><span>{Object.keys(this.props.userData.answers).length}</span>
            </div>
            <div className="leaderboard-created-questions">
              <span>Created Question</span><span>{this.props.userData.questions.length}</span>
            </div>
          </div>
        </div>
        <div className="leaderboard-score">
          <div>{this.props.userData.score}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({users}, {user}) {
  return {
    userData: users[user],
  }
}

export default connect(mapStateToProps)(LeaderboardIndividual)
