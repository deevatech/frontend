import React, { PropTypes } from 'react'

const ProblemDescription = (props) => {
  return (
    <div className='problem-metadata'>
      <h1>{props.title}</h1>
      <pre>{props.description}</pre>
    </div>
  )
}

ProblemDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ProblemDescription
