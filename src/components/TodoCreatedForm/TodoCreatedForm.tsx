import styles from './TodoCreatedForm.module.scss';
import {Col, Container, Form, Row} from "react-bootstrap";

interface TodoCreatedFormProps { }

export const TodoCreatedForm = ({ }: TodoCreatedFormProps) => (
  <Container>
    <Form className={styles.form}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Normal text" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Category
        </Form.Label>
        <Col sm="10">
          <Form.Select>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </Form.Select>
        </Col>
      </Form.Group>
    </Form>
  </Container>
);
