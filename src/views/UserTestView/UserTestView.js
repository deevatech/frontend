/* @flow */
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { submitCodeToTest } from '../../redux/modules/userTester'
import classes from './UserTestView.scss'

type Props = {

};
export class UserTest extends React.Component {
  props: Props;

  render () {
    return (
      <div className="testContainer">
        <ProblemDescription metaData={this.props.metaData} />
        <SpecList specs={this.props.specs} />
        <TestInterface skeletonText={this.props.skeletonText} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  code: state.inputtedCode
})

export default connect((mapStateToProps), {
  submitCodeToTest
})(UserTest)

