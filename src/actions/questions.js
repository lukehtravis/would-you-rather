export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_VOTE_QUESTION = 'ADD_VOTE_QUESTION'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function addVoteQuestion(question) {
  return {
    type: ADD_VOTE_QUESTION,
    question
  }
}

export function handleAnswerQuestionQ(qId, optionChosen, authedUser) {
  return (dispatch) => {
     dispatch(addVoteQuestion({qId, optionChosen, authedUser}))
  }
}
