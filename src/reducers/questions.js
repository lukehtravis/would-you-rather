import { RECEIVE_QUESTIONS } from '../actions/questions'
import { ADD_VOTE_QUESTION } from '../actions/questions'
import { SAVE_NEW_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_VOTE_QUESTION :
      let {type, question} = action
      return {
        ...state,
        [question.qId]: {
          ...state[question.qId],
          [question.optionChosen]: {
              ...state[question.qId][question.optionChosen],
              votes: state[question.qId][question.optionChosen].votes.concat(...[question.authedUser])
          }
        }
      }
    case SAVE_NEW_QUESTION :
      let newQuestion = action.question
      return {
        ...state,
        [newQuestion.id]: newQuestion
      }
    default :
      return state
  }
}
