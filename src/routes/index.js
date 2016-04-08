import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { asyncFetchTestById } from '../redux/modules/userTester'

// NOTE: here we're making use of the `resolve.root` configuration
// option in webpack, which allows us to specify import paths as if
// they were from the root of the ~/src directory. This makes it
// very easy to navigate to files regardless of how deeply nested
// your current file is.
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import UserTestView from 'views/UserTestView/UserTestView'

export default (store) => {
  const fetchTest = location => {
    store.dispatch(asyncFetchTestById(location.params.test_id))
  }

  return (
    <Route path='/' component={CoreLayout}>
      <Route path='/tests/:test_id' component={UserTestView} onEnter={fetchTest} />
    </Route>
  )
}
