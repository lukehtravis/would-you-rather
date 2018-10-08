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
