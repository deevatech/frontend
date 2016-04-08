import React, { PropTypes } from 'react'
import ProblemDescription from '../components/ProblemDescription'
import TestInterface from '../components/TestInterface'

export default class UserProblem extends React.Component {
  render() {
    <div>
      <ProblemDescription title={this.props.metaData.title} description={this.props.metaData.description} />
      <TestInterface skeletonText={this.props.skeletonText} />
    </div>
  }
}
