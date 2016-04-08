import React, { PropTypes } from 'react'
import Spec from '../components/Spec'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const SpecList = props => {
  return (
    <div>
    <ul>
      {props.specs.map(spec => {
        return <li><Spec spec={spec} /></li>
      })}
    </ul>
    </div>
  )

}

const mapStateToProps = state => {
  return ({
    specs: state.userTester.specs
  })
}

export default connect(
  mapStateToProps
)(SpecList)



