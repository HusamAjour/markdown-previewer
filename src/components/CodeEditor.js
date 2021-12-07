import React from "react";

import { Button, OverlayTrigger, Tooltip, Form } from "react-bootstrap";

import { useMarkdownUpdate, useMarkdown } from "../context/MarkdownProvider";

import { MdContentCopy } from "react-icons/md";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Copy To Clipboard
  </Tooltip>
);

function CodeEditor(props) {
  const updateMarkdown = useMarkdownUpdate();
  const markdownText = useMarkdown();
  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdownText);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <h4>Editor</h4>
        <div className="editorBox">
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <Button variant="light" className="icon" onClick={copyToClipboard}>
              <MdContentCopy />
            </Button>
          </OverlayTrigger>
          <Form.Control
            className="editor word-break"
            as="textarea"
            id="editor"
            onChange={updateMarkdown}
          />
        </div>
      </div>
    </>
  );
}

export default CodeEditor;
