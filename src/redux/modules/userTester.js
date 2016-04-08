/* @flow */

import fetch from 'isomorphic-fetch'
// ------------------------------------
// UserTester
// ------------------------------------
export const RECEIVE_TEST = 'RECEIVE_TEST'
export const SUBMIT_CODE_TO_TEST = 'SUBMIT_CODE_TO_TEST'
export const RECEIVE_TEST_RESULTS = 'RECEIVE_TEST_RESULTS'
export const WAIT_ON_RESPONSE = 'WAIT_ON_RESPONSE'
export const TIME_UP = 'TIME_UP'

// ------------------------------------
// Actions
// ------------------------------------
// NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
// If you're unfamiliar with Flow, you are completely welcome to avoid annotating your code, but
// if you'd like to learn more you can check out: flowtype.org.
// DOUBLE NOTE: there is currently a bug with babel-eslint where a `space-infix-ops` error is
// incorrectly thrown when using arrow functions, hence the oddity.

export function receiveTest (testData: Object, testId: number): Action {
  return {
    type: RECEIVE_TEST,
    payload: testData,
    id: testId
  }
}

export function submitCodeToTest (code: string = ''): Action {
  return {
    type: SUBMIT_CODE_TO_TEST,
    payload: code
  }
}

export function receiveTestResults (results: Object): Action {
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

export const asyncFetchTestById = (testId: number): Function => {
  return (dispatch: function): Promise => {
    return new Promise((resolve: function) => {
      fetch('http://swarm1.weperk.com/tests/' + testId).then((response) => {
        return response.json()
      }).then((value) => {
        dispatch(receiveTest(value, testId))
        resolve()
      }).catch((error) => {
        console.log(error)
        console.log('what the hell!')
      })
    })
  }
}

export const asyncSubmitCode = (input: string, testId: string): Function => {
  const postBody = {
    code: input
  }

  return (dispatch: function): Promise => {
    return new Promise((resolve: function) => {
      fetch('http://swarm1.weperk.com/tests/' + testId + '/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(postBody)
      }).then((response) => {
        return response.json()
      }).then((value) => {
        dispatch(receiveTestResults(value))
        resolve()
      }).catch((error) => {
        console.log(error)
        console.log('holy snap!')
      })
    })
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RECEIVE_TEST]: (state: Object, action: Object): Object => {
    return Object.assign({}, state,
      Object.assign({}, state.editorContent, action.payload)
    )
  },
  [SUBMIT_CODE_TO_TEST]: (state: Object, action: {payload: Object}): Object => {
    return Object.assign({}, state,
      Object.assign({}, state.editorContent, action.payload)
    )
  },
  [RECEIVE_TEST_RESULTS]: (state: Object, action: Object): Object => {
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
    title: '',
    description: '',
    language: '',
    source: ''
  },
  specs: []
}

export default function testCodeReducer (state: Object = initialState, action: Action): Object {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
