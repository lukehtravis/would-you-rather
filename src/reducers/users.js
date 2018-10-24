import {RECEIVE_USERS} from '../actions/users'
import {ANSWER_QUESTION} from '../actions/users'

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ANSWER_QUESTION :
      let {type, question} = action
      console.log(question);
      console.log(state);
      let userAnswer = {}
      userAnswer[question.qId] = question.answer

      return {
        ...state,
        [question.authedUser]: {
          ...state[question.authedUser],
          answers: {
            ...state[question.authedUser].answers,
            ...userAnswer
          }
        }
      }
    default:
      return state
  }
}
