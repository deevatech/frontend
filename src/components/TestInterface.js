import React from 'react'
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/ruby';
import 'brace/theme/monokai';

type Props = {

};
export class TestInterface extends React.Component {
  props: Props;

  render () {
    return (
      <AceEditor
        mode="ruby"
        theme="monokai"
        tabSize={2}
        name="ace-editor"
        highlightActiveLine="true"
        editorProps={{$blockScrolling: true}}
      />
    )
  }
}

export default TestInterface

