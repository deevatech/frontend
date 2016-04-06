/* @flow */
// ------------------------------------
// UserTester
// ------------------------------------
export const SUBMIT_CODE_TO_TEST = 'SUBMIT_CODE_TO_TEST'
export const WAIT_ON_RESPONSE = 'WAIT_ON_RESPONSE'
export const TESTS_RAN = 'TESTS_RAN'
export const EXERCISE_COMPLETED = 'EXERCISE_COMPLETED'
export const TIME_UP = 'TIME_UP'

// ------------------------------------
// Actions
// ------------------------------------
// NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
// DOUBLE NOTE: there is currently a bug with babel-eslint where a `space-infix-ops` error is
// incorrectly thrown when using arrow functions, hence the oddity.

export function submitCodeToTest(code: string = ''): Action {
  return {
    type: SUBMIT_CODE_TO_TEST,
    payload: code
  }
}

export const actions = {
  submitCodeToTest
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SUBMIT_CODE_TO_TEST]: (state: string, action: {payload: string}): string => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = ""
export default function testCodeReducer (state: string = initialState, action: Action): string {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
