import React from "react";
import { useMarkdown } from "../context/MarkdownProvider";
import { marked } from "marked";

import ReactMarkdown from "react-markdown";
marked.use({ gfm: true, breaks: true });

function Previewer(props) {
  const markdown = useMarkdown();
  const getMarkdownText = () => {
    var rawMarkup = marked.parse(markdown);
    return { __html: rawMarkup };
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
          <div
            id="preview"
            className="word-break react-markdown"
            dangerouslySetInnerHTML={getMarkdownText()}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Previewer;
