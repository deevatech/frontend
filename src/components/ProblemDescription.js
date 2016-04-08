import React from 'react'

type Props = {

};
export class ProblemDescription extends React.Component {
  props: Props;

  render () {
    return (
      <div className="problem-metadata">
        <h1>Title</h1>
        <p>description</p>
      </div>
    )
  }
}

export default ProblemDescription

