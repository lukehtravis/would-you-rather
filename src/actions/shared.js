import { getInitialData } from '../utils/api';
import { receiveQuestions } from '../actions/questions'
import {receiveUsers} from '../actions/users'
import {setAuthenticatedUser} from '../actions/authenticatedUser'

const AUTHED_ID = 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({questions, users}) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        dispatch(setAuthenticatedUser(AUTHED_ID))
      })
  }
}
