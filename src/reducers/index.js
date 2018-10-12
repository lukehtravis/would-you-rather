import { combineReducers } from 'redux'
import questions from './questions'
import users from './users'
import authenticatedUser from './authenticatedUser'

export default combineReducers({
  questions,
  users,
  authenticatedUser
})
