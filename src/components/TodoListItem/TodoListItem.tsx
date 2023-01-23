import {Badge, Button, ListGroup, Modal} from "react-bootstrap";
import {Todo} from "../../types";
import React, {MouseEventHandler, useState} from "react";
import {Portal} from "@/components/Portal";
import {ChangeTodoModal} from "../ChangeTodoModal";
import styles from './TodoListItem.module.scss';
import {MutationTrigger} from "@reduxjs/toolkit/src/query/react/buildHooks";
import {BaseQueryFn, MutationDefinition} from "@reduxjs/toolkit/query";
import {useRemoveTodoMutation} from "@/store/features/todo/todoSlice";

interface TodoListItemProps extends Todo {
  changeTodo: MutationTrigger<MutationDefinition<Omit<Todo, 'variant'>, BaseQueryFn<any, unknown, unknown, {}, {}>, never, Todo, "todoApi">>
  isLoadingTodo: boolean
}

interface RemoveTodoModalProps {
  show: boolean
  handleClose: () => void
  handleRemove: (event: React.MouseEvent<HTMLButtonElement>, id: string) => void
  id: string
}

export const TodoListItem = ({id, variant, title, category, changeTodo, isLoadingTodo}: TodoListItemProps) => {
  const [titleTodo, setTitleTodo] = useState<string>(title)
  const [categoryTodo, setCategoryTodo] = useState<string>(category)
  const [show, setShow] = useState<boolean>(false)
  const [showRemovePopup, setShowRemovePopup] = useState<boolean>(false)

  const [removeTodo] = useRemoveTodoMutation()

  const handleSaveChange = (todo: Omit<Todo, 'variant'>) => {
    changeTodo(todo)
    setShow(prevState => !prevState)
  }

  const handleClose = () => setShow(prevState => !prevState)

  const handleComplete = () => {}

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
    removeTodo(id)

    setShowRemovePopup(prevState => !prevState)
  }

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => setShow(prevState => !prevState)

  return (
    <ListGroup.Item variant={variant} className={styles.todoListItem} key={id}>
      <span>{titleTodo}</span>
      <div className={styles.todoListItemButtons}>
        <Badge className={styles.badge} bg="secondary">{category}</Badge>
        <Button onClick={handleComplete} variant='success'>Complete</Button>
        <Button onClick={handleClick} variant='warning'>Change</Button>
        <Button onClick={() => setShowRemovePopup(prevState => !prevState)} variant='danger'>Remove</Button>
      </div>

      <Portal>
        <ChangeTodoModal
          show={show}
          handleClose={handleClose}
          setTitleTodo={setTitleTodo}
          setCategoryTodo={setCategoryTodo}
          titleTodo={titleTodo}
          categoryTodo={categoryTodo}
          handleSaveChange={handleSaveChange}
          id={id}
          isLoading={isLoadingTodo}
        />
      </Portal>

      <Portal>
        <RemoveTodoModal
          show={showRemovePopup}
          handleClose={() => setShowRemovePopup(prevState => !prevState)}
          handleRemove={handleRemove}
          id={id}
        />
      </Portal>

    </ListGroup.Item>
  );
}

const RemoveTodoModal = ({show, handleClose, handleRemove, id}: RemoveTodoModalProps) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Remove Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete todo?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={(event) => handleRemove(event, id)}>
          Remove
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
