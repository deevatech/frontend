import React, { PropTypes } from 'react'
import ProblemDescription from '../components/ProblemDescription'
import TestInterface from '../components/TestInterface'

import { connect } from 'react-redux'

const UserProblem = (props) => {
  return (
    <div>
      <ProblemDescription title={props.title} description={props.description} />
      <TestInterface inputText={props.inputText} />
    </div>
  )
}

UserProblem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  inputText: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
  return ({
    title: state.userTester.title,
    description: state.userTester.description,
    inputText: state.userTester.source
  })
}

export default connect(
  mapStateToProps
)(UserProblem)
