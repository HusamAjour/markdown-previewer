import React, { createContext, useContext, useState } from "react";

const MarkdownContext = createContext();
const MarkdownUpdateContext = createContext();

export function useMarkdown() {
  return useContext(MarkdownContext);
}
export function useMarkdownUpdate() {
  console.log("useMarkdownUpdate");
  return useContext(MarkdownUpdateContext);
}

export function MarkdownProvider({ children }) {
  const [markdown, setMarkdown] = useState("");
  const updateMarkdown = (e) => {
    setMarkdown(e.target.value);
  };
  return (
    <MarkdownContext.Provider value={markdown}>
      <MarkdownUpdateContext.Provider value={updateMarkdown}>
        {children}
      </MarkdownUpdateContext.Provider>
    </MarkdownContext.Provider>
  );
}
