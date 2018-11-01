import {
  generateUID,
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  formatQuestion
} from './_DATA.js'

export function getInitialData () {
  return Promise.all(
    [_getQuestions(), _getUsers()]
  ).then(([questions, users]) => ({
    questions,
    users
  }))
}

export function saveQuestion(question) {
  return _saveQuestion(question)
}

export function saveQuestionAnswer(questionAnswer) {
  return _saveQuestionAnswer(questionAnswer)
}
