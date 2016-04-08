import React, { PropTypes } from 'react'
import Spec from '../components/Spec'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const SpecList = props => {
  const renderSpecs = specs => {

    if (specs && specs.length) {
      return (
        <li><Spec spec={specs[0]} /></li>
      )
    }

    return
  }

  return (
    <ul>
      {renderSpecs(props.specs)}
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



