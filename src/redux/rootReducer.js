import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import userTester from './modules/userTester'

export default combineReducers({
  userTester,
  router
})
