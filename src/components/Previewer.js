import React from "react";
import { useMarkdown } from "../context/MarkdownProvider";

import ReactMarkdown from "react-markdown";

function Previewer(props) {
  const markdownText = useMarkdown();
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
        <h4>Previewer</h4>
        <div
          className="previewer"
          style={{
            height: "100%",
            borderRadius: "10px",
            border: "1px solid #1881D5",
            padding: ".375rem .75rem",
          }}
        >
          <div id="preview" className="word-break">
            <ReactMarkdown children={markdownText} className="react-markdown" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Previewer;
