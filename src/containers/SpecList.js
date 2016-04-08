import React, { PropTypes } from 'react'
import Spec from '../components/Spec'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const SpecList = props => {
  return (
    <ul>
      {props.specs.map( spec => {
        return <li><Spec spec={spec} /></li>
      })}
    </ul>
  )

}

const mapStateToProps = state => {
  // return ({
  //   title: state.userTester.title,
  //   description: state.userTester.description,
  //   inputText: state.userTester.source
  // })
  return({
    specs: state.userTester.specs
  })
}

export default connect(
  mapStateToProps
)(SpecList)



