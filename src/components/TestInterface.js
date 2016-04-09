import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import ace from 'brace'
import AceEditor from 'react-ace'
import 'brace/mode/ruby'
import 'brace/theme/monokai'

import { asyncSubmitCode } from '../redux/modules/userTester'

const TestInterface = (props) => {
  const editorName = 'test-input-area'

  const onClick = () => {
    const editor = ace.edit(editorName)
    const source = editor.getSession().getValue()
    // TODO: get this from react-router instead of using this DOM-reading fix
    const testId = document.getElementsByClassName('test-interface')[0].dataset.testId
    props.dispatch(asyncSubmitCode(source, testId))
  }

  return (
    <div className='problem-window' style={{float: 'left'}}>
      <AceEditor
        mode='ruby'
        theme='monokai'
        tabSize={2}
        fontSize={18}
        width='900px'
        name={editorName}
        highlightActiveLine
        value={props.inputText}
        editorProps={{$blockScrolling: true}}
      />
      <button onClick={onClick}>Submit</button>
    </div>
  )
}

TestInterface.propTypes = {
  dispatch: PropTypes.func.isRequired,
  inputText: PropTypes.string.isRequired
}

export default connect()(TestInterface)

