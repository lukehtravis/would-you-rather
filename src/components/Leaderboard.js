import  React, {Component} from 'react'
import {connect} from 'react-redux'
import LeaderboardIndividual from '../components/LeaderboardIndividual'

class Leaderboard extends Component {
  render() {
    return (
      <div className="leaderboard-box">
        {this.props.leaderboardUsers.map((user) => (
          <LeaderboardIndividual user={user} key={user} />
        ))}
      </div>
    )
  }
}
// Pass in users part of store using destructuring
function mapStateToProps({users}) {
  // Create temporary points property on users object (points == questions + answers)
  for (let name in users) {
    if (users.hasOwnProperty(name)) {
      users[name].score = 0;
      users[name].score = Object.keys(users[name].answers).length + users[name].questions.length;
    }
  }
  return {
    // Order object keys by points scores to send to lower components
    leaderboardUsers: Object.keys(users).sort((a,b) => users[b].score - users[a].score),
    leaderboardUsersFull: users
  }
}

export default connect(mapStateToProps)(Leaderboard);
