import React, {Dispatch, SetStateAction} from 'react';
import {Button, Form, Modal, Spinner} from "react-bootstrap";
import {Todo} from "@/types";
import styles from './ChangeTodoModal.module.scss'

interface IChangeTodoModalProps {
  id: string
  titleTodo: string
  categoryTodo: string
  show: boolean
  isLoading: boolean
  setTitleTodo: Dispatch<SetStateAction<string>>
  setCategoryTodo: Dispatch<SetStateAction<string>>
  handleClose: () => void
  handleSaveChange: (todo: Omit<Todo, 'variant'>) => void
}

type HandleChangeTypes = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setState: React.Dispatch<React.SetStateAction<string>>) => void

export const ChangeTodoModal = ({
   show,
   handleClose,
   setCategoryTodo,
   titleTodo,
   setTitleTodo,
   categoryTodo,
   handleSaveChange,
   id,
   isLoading
}: IChangeTodoModalProps) => {

  const handleChange: HandleChangeTypes = (event, setState) => {
    setState((event.target as HTMLInputElement).value)
  }

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name Todo</Form.Label>
            <Form.Control
              onChange={(event) => handleChange(event, setTitleTodo)}
              type="text"
              placeholder="Write new text todo..."
              autoFocus
              value={titleTodo}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name Category</Form.Label>
            <Form.Control
              onChange={(event) => handleChange(event, setCategoryTodo)}
              type="text"
              placeholder="Write new text todo..."
              autoFocus
              value={categoryTodo}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => handleSaveChange({
            title: titleTodo,
            category: categoryTodo,
            id: id,
          })}
        >
          {isLoading
            ? <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className={styles.spinner}
            />
            : null}
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

