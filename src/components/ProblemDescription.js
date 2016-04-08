import React from 'react'

const ProblemDescription = props => {
  return (
    <div className="problem-metadata">
      <h1>{props.title}</h1>
      <pre>{props.description}</pre>
    </div>
  )
}

export default ProblemDescription
