import React from "react";
import { Form } from "react-bootstrap";
function CodeEditor(props: any) {
  return (
    <div>
      <Form.Control as="textarea" id="editor" />
    </div>
  );
}

export default CodeEditor;
