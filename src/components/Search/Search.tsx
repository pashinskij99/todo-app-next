import styles from './Search.module.scss';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {category} from "../../constants";

interface SearchProps { }

export const Search = ({ }: SearchProps) => (
  <Container>
    <InputGroup className={styles.search}>
      <Form.Control placeholder="Enter todo to search"/>
      <Form.Select className={styles.select}>
        {category.map(({id, name}) => (
          <option key={id} value={id}>{name}</option>
          ))}
      </Form.Select>
      <Button variant="primary">Search</Button>
    </InputGroup>
  </Container>

);
