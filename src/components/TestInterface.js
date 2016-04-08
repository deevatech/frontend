import React from 'react'
import { render } from 'react-dom';
import { connect } from 'react-redux'
import ace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/ruby';
import 'brace/theme/monokai';

import { asyncSubmitCode } from '../redux/modules/userTester'

const TestInterface = (props) => {
  const editorName = "test-input-area"

  const onClick = () => {
    const editor = ace.edit(editorName)
    const source = editor.getSession().getValue()
    const testId = document.getElementsByClassName('test-interface')[0].dataset.testId
    props.dispatch(asyncSubmitCode(source, testId))
  }

  return (
    <div className="problem-window">
      <AceEditor
        mode="ruby"
        theme="monokai"
        tabSize={2}
        fontSize={18}
        name={editorName}
        width="1200px"
        highlightActiveLine={true}
        value={props.inputText}
        editorProps={{$blockScrolling: true}}
      />
      <button onClick={onClick}>Submit</button>
    </div>
  )
}

export default connect()(TestInterface)

