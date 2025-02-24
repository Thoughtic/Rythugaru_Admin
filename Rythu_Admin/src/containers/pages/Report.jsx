import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
  Card, CardBody, CardTitle, CardTitleWrap, CardSubhead,
} from '@/shared/components/Card';

const Providers = () => (
  <Container>
    <Row>
      <Col md={12}>
        <Card>
          <CardBody>
            <CardTitleWrap>
              <CardTitle>Providers</CardTitle>
              <CardSubhead>Summary of Key Metrics</CardSubhead>
            </CardTitleWrap>
            <p>
              This section provides an overview of the key performance indicators and financial 
              health of the business. You can add more details like revenue trends, employee 
              performance, and other critical data here.
            </p>
            <p>
              Consider integrating charts, graphs, and tables for better visualization of the report.
            </p>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Providers;

