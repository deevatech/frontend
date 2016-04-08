/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { submitCodeToTest } from '../../redux/modules/userTester'

import UserProblem from '../../containers/UserProblem'
import SpecList from '../../containers/SpecList'

export class UserTest extends React.Component {
  render () {
    return (
      <div data-test-id={this.props.params.test_id} className='test-interface'>
        <UserProblem
          className='problem-container'
          editorText={this.props.code}
        />
        <SpecList
          className='spec-container'
          specs={this.props.specs}
        />
      </div>
    )
  }
}

UserTest.propTypes = {
  params: PropTypes.shape({
    test_id: PropTypes.number
  }),
  code: PropTypes.string.isRequired,
  specs: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  code: state.editorCode,
  specs: state.specs
})

export default connect((mapStateToProps), {
  submitCodeToTest
})(UserTest)

