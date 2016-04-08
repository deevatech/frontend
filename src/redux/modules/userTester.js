/* @flow */

import fetch from 'isomorphic-fetch'
// ------------------------------------
// UserTester
// ------------------------------------
export const RECEIVE_TEST = 'RECEIVE_TEST'
export const SUBMIT_CODE_TO_TEST = 'SUBMIT_CODE_TO_TEST'
export const RECEIVE_TEST_RESULTS = 'RECEIVE_TEST_RESULTS'
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

export function receiveTest(testData, testId: number): Action {
  return {
    type: RECEIVE_TEST,
    payload: testData,
    id: testId
  }
}

export function submitCodeToTest(code: string = ''): Action {
  return {
    type: SUBMIT_CODE_TO_TEST,
    payload: code
  }
}

export function receiveTestResults(results) {
  return {
    type: RECEIVE_TEST_RESULTS,
    results: results
  }
}

export const actions = {
  receiveTest,
  submitCodeToTest,
  receiveTestResults
}

export const asyncFetchTestById = testId => {
  return dispatch => {
    return new Promise((resolve) => {
      fetch("http://swarm1.weperk.com/tests/" + testId).then(response => {
      // fetch("http://www.mocky.io/v2/57074be4110000a514e94599").then(response => {
        return response.json()
      }).then(value => {
        dispatch(receiveTest(value, testId))
        resolve()
      }).catch(error => {
        console.log(error)
        console.log("what the hell!")
      })
    })
  }
}

export const asyncSubmitCode = input => {
  const postBody = {
    code: input
  }

  return dispatch => {
    return new Promise((resolve) => {
      fetch("http://swarm1.weperk.com/tests/1/submit", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(postBody)
      }).then(response => {
      // fetch("http://www.mocky.io/v2/57074bb4110000ab14e94598").then(response => {
        return response.json()
      }).then(value => {
        dispatch(receiveTestResults(value))
        resolve()
      }).catch(error => {
        console.log("holy snap!")
      })
    })
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RECEIVE_TEST]: (state: object, action: object): Object => {
    return Object.assign({}, state,
      Object.assign({}, state.editorContent, action.payload)
    )
  },
  [SUBMIT_CODE_TO_TEST]: (state: object, action: {payload: object}): object => {
    return Object.assign({}, state,
      Object.assign({}, state.editorContent, action.payload)
    )
  },
  [RECEIVE_TEST_RESULTS]: (state: object, action: object): object => {
    return Object.assign({}, state, {
      specs: action.results.output.output.examples
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  editorContent: {
    id: 0,
    title: "",
    description: "",
    language: "",
    source: ""
  },
  specs: []
}

export default function testCodeReducer (state: object = initialState, action: Action): Object {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
