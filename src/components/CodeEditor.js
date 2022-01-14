import React, { useRef } from "react";

import { Button, OverlayTrigger, Tooltip, Form } from "react-bootstrap";

import { useMarkdownUpdate, useMarkdown } from "../context/MarkdownProvider";

import { MdContentCopy } from "react-icons/md";

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Copy To Clipboard
  </Tooltip>
);

function CodeEditor(props) {
  const { updateMarkdown, updateMarkdownOnRender } = useMarkdownUpdate();

  const inputRef = useRef(null);

  const markdownText = useMarkdown();
  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdownText);
  };

  React.useEffect(() => {
    console.log(inputRef.current.value);
    if (inputRef.current) {
      updateMarkdownOnRender(inputRef);
    }
  }, []);

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
            ref={inputRef}
            className="editor word-break react-markdown"
            as="textarea"
            id="editor"
            onChange={updateMarkdown}
            defaultValue={
              "# Welcome to my React Markdown Previewer! \n## This is a sub-heading... \n### And here's some other cool stuff: \n Heres some code, `<div></div>`, between 2 backticks.\n\n```\n // this is multi-line code: \n function anotherExample(firstLine, lastLine) { \n if (firstLine == '```' && lastLine == '```') { \n return multiLineCode; \n} \n }\n``` \n\n\n You can also make text **bold**... whoa! \nOr _italic_. \nOr... wait for it... **_both!_** \nAnd feel free to go crazy ~~crossing stuff out~~. \n There's also [links](https://www.freecodecamp.org), and \n> Block Quotes! \nAnd if you want to get really crazy, even tables: \n- And of course there are lists. \n- Some are bulleted. \n- With different indentation levels. \n- That look like this. \n1. And there are numbered lists too. \n1. Use just 1s if you want! \n1. And last but not least, let's not forget embedded images: \n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
            }
          />
        </div>
      </div>
    </>
  );
}

export default CodeEditor;
