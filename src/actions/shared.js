import { getInitialData } from '../utils/api';
import { receiveQuestions } from '../actions/questions'
import {receiveUsers} from '../actions/users'
import {setAuthenticatedUser} from '../actions/authenticatedUser'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({questions, users}) => {
        dispatch(setAuthenticatedUser("tylermcginnis"))
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
      })
  }
}
