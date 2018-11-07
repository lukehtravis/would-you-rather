import {saveQuestion} from '../utils/api.js'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_VOTE_QUESTION = 'ADD_VOTE_QUESTION'
export const SAVE_NEW_QUESTION = 'SAVE_NEW_QUESTION'

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

export function saveNewQuestion(question) {
  return {
    type: SAVE_NEW_QUESTION,
    question
  }
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    saveQuestion({optionOneText, optionTwoText, author})
      .then((question) => dispatch(saveNewQuestion(question)))
  }
}

export function handleAnswerQuestionQ(qId, optionChosen, authedUser) {
  return (dispatch) => {
     dispatch(addVoteQuestion({qId, optionChosen, authedUser}))
  }
}
