import styles from './TodoList.module.scss'
import {Container, ListGroup} from 'react-bootstrap'
import {TodoListItem} from '../TodoListItem'
import {useChangeTodoMutation, useFetchTodosQuery} from '@/store/features/todo/todoSlice'
import {LoadingList} from '@/components/LoadingList'

export const TodoList = () => {
  const {data, isLoading} = useFetchTodosQuery(null)
  const [changeTodo, {isLoading: isLoadingTodo}] = useChangeTodoMutation()

  return (
    <Container className={styles.todoList}>
      <ListGroup>
        {isLoading ? <LoadingList/> : null}
        {data?.map(({id, category, title, variant}) => (
          <TodoListItem
            key={id}
            id={id}
            category={category}
            title={title}
            variant={variant}
            isLoadingTodo={isLoadingTodo}
            changeTodo={changeTodo}
          />
        ))}
      </ListGroup>
    </Container>
  )
}
