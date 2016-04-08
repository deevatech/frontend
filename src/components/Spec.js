import React from 'react'

const Spec = props => {
  const color = status => {
    if (status === "passed") {
      return "green"
    } else {
      return "red"
    }
  }

  return (
    <div className={color(props.spec.status)}>
      <h3>{props.spec.description}</h3>
      <p>{props.spec.full_description}</p>
      <p>Status: {props.spec.status}</p>
    </div>
  )
}

export default Spec
