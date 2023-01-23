import styles from './ButtonCreateTodo.module.scss';
import {Button} from "react-bootstrap";
import {Portal} from "../Portal";
import ModalCreateTodo from "../../store/features/modal/ModalCreateTodo";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setActive} from "../../store/features/modal/modalSlice";

interface ButtonCreateTodoProps {
}

export const ButtonCreateTodo = ({}: ButtonCreateTodoProps) => {

  const dispatch = useAppDispatch()
  const {isActive} = useAppSelector(state => state.modal)

  const handleClose = () => dispatch(setActive(false));
  const handleShow = () => dispatch(setActive(true));

  return (
    <div className={styles.buttonCreateTodo}>
      <Button onClick={handleShow} variant='dark'>
        Create Todo
      </Button>

      <Portal>
        <ModalCreateTodo handleClose={handleClose} show={isActive}/>
      </Portal>
    </div>
  );
}
