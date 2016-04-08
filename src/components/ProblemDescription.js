import React from 'react'

const ProblemDescription = props => {
  return (
    <div className="problem-metadata">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default ProblemDescription
