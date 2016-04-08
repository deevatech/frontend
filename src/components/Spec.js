import React, {PropTypes} from 'react'

const Spec = (props) => {
  const color = (status) => {
    if (status === 'passed') {
      return 'green'
    } else {
      return 'red'
    }
  }

  return (
    <div style={{color: color(props.spec.status)}}>
      <h3>{props.spec.description}</h3>
      <pre>{props.spec.full_description}</pre>
      <p>Status: {props.spec.status}</p>
    </div>
  )
}

Spec.propTypes = {
  spec: PropTypes.shape({
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    full_description: PropTypes.string.isRequired
  })
}

export default Spec
