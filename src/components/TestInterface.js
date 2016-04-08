import React from 'react'
import { render } from 'react-dom';
import { connect } from 'react-redux'
import ace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/ruby';
import 'brace/theme/monokai';

import { asyncSubmitCode } from '../redux/modules/userTester'

const TestInterface = ({ inputText, dispatch}) => {
  const editorName = "test-input-area"

  const onClick = () => {
    const editor = ace.edit(editorName)
    const source = editor.getSession().getValue()
    dispatch(asyncSubmitCode(source))
  }

  return (
    <div className="problem-window">
      <AceEditor
        mode="ruby"
        theme="monokai"
        tabSize={2}
        name={editorName}
        highlightActiveLine={true}
        value={inputText}
        editorProps={{$blockScrolling: true}}
      />
      <button onClick={onClick}>Submit</button>
    </div>
  )
}

export default connect()(TestInterface)
