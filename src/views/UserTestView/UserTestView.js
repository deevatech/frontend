/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { submitCodeToTest } from '../../redux/modules/userTester'
import classes from './UserTestView.scss'

import UserProblem from '../../containers/UserProblem'
import SpecList from '../../containers/SpecList'

type Props = {

};
export class UserTest extends React.Component {
  props: Props;

  render () {
    return (
      <div className="test-interface">
        <UserProblem
          editorText={this.props.code}
        />
        <SpecList
          specs={this.props.specs}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  code: state.editorCode,
  specs: state.specs
})

export default connect((mapStateToProps), {
  submitCodeToTest
})(UserTest)

