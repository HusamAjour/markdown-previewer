import React from "react";
import Previewer from "./Previewer";
import CodeEditor from "./CodeEditor";

import { Container, Row, Col } from "react-bootstrap";

function MainGrid(props: any) {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <CodeEditor />
        </Col>
        <Col>
          <Previewer />
        </Col>
      </Row>
    </Container>
  );
}

export default MainGrid;
