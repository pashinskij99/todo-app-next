import React from 'react';
import styles from "./ModalCreateTodo.module.scss";
import {Button, Form, Modal} from "react-bootstrap";
import {Todo} from "@/types";
import {useAddTodoMutation} from "@/store/features/todo/todoSlice";

interface IModalCreateTodoProps {
  handleClose: () => void
  show: boolean
}

const ModalCreateTodo = ({show, handleClose}: IModalCreateTodoProps) => {

  const [addTodo, {isLoading}] = useAddTodoMutation()

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const todo: Todo | any = {}

    for (const [key, value] of formData) {
      todo[key] = value
    }

    addTodo(todo)
  }

  return (
    <Modal
      centered
      className={styles.modal}
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Create TODO</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id='form' onSubmit={onSubmit} className={styles.form}>
          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.formGroupLabel}>Todo</Form.Label>
            <Form.Control name='title' className={styles.input} type="text" placeholder="Write todo..."/>
          </Form.Group>
          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.formGroupLabel}>Category</Form.Label>
            <Form.Control name='category' className={styles.input} type="text" placeholder="Write category..."/>
          </Form.Group>
          <Form.Group className={styles.formGroup}>
            <Form.Label className={styles.formGroupLabel}>Color</Form.Label>
            <Form.Control name='variant' className={styles.input}
              type="color"
              defaultValue="#563d7c"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button form="form" type='submit' variant="primary" className='m-auto'>
          Create Todo
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCreateTodo;
