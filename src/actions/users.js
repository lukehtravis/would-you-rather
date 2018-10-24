import { saveQuestionAnswer } from '../utils/api.js'
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function answerQuestion(question) {
  return {
    type: ANSWER_QUESTION,
    question
  }
}

export function handleAnswerQuestion(qId, answer, authedUser) {
  return (dispatch) => {
     dispatch(answerQuestion({qId, answer, authedUser}))
  }
}
