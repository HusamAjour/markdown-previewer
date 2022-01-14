import React from "react";
import Previewer from "./Previewer";
import CodeEditor from "./CodeEditor";

import { Container, Row, Col } from "react-bootstrap";

function MainGrid() {
  return (
    <Container
      fluid="md"
      as="section"
      style={{ minHeight: "100vh", paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <Row>
        <Col>
          <h1 className="text-center mb-4">Markdown Previewer</h1>
          <p>
            Markdown is a text-to-HTML conversion tool for web writers. Markdown
            allows you to write using an easy-to-read, easy-to-write plain text
            format, then convert it to structurally valid XHTML (or HTML). This
            website helps users to preview their markdown at the same second
            they're typing. If you need help to get started with the markdown
            basics, you can checkout this{" "}
            <a
              href="https://www.markdownguide.org/basic-syntax/"
              target="_blank"
              rel="noreferrer"
            >
              resource
            </a>
            .
          </p>
        </Col>
      </Row>
      <Row sm={2} style={{ minHeight: "100vh" }}>
        <Col sm style={{ minHeight: "100%" }}>
          <CodeEditor />
        </Col>
        <Col sm style={{ minHeight: "100%" }}>
          <Previewer />
        </Col>
      </Row>
    </Container>
  );
}

export default MainGrid;
