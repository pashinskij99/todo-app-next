import {createApi, fakeBaseQuery} from "@reduxjs/toolkit/query/react";
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore"
import {db} from "../../../firebase/cloudFirestore";
import {Todo} from "../../../types";

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    fetchTodos: builder.query({
      async queryFn() {
        try {
          const todoRef = collection(db, 'todos')
          const querySnapshot = await getDocs(todoRef)
          let todos: Todo[] = []

          querySnapshot?.forEach((doc) => {
            const {category, title, variant} = doc.data()

            const todoObject: Todo = {
              id: doc.id,
              category,
              title,
              variant
            }

            todos.push(todoObject)
          })

          return {data: todos}

        } catch (e) {
          throw new Error(`Some Error ${e}.`)
        }
      },
      providesTags: ['Todos']
    }),
    addTodo: builder.mutation({
      async queryFn(todo: Todo) {
        try {
          const todoRef = await addDoc(collection(db, 'todos'), todo)

          return {data: todo}
        } catch (e) {
          throw new Error(`Some error ${e}!`)
        }
      },
      invalidatesTags: ['Todos']
    }),
    changeTodo: builder.mutation({
      async queryFn(todo: Todo) {
        try {
          const todoRef = doc(db, 'todos', todo.id)
          await updateDoc(todoRef, {
            title: todo.title,
            category: todo.category
          })
          return {data: todo}
        } catch (e) {
          throw new Error(`Some error ${e}!`)
        }
      },
      invalidatesTags: ['Todos']
    }),
    removeTodo: builder.mutation({
      async queryFn(id: string) {
        try {
          await deleteDoc(doc(db, "todos", id));
          
          return {data: id}
        } catch (e) {
          throw new Error(`Some error ${e}!`)
        }
      },
      invalidatesTags: ['Todos']
    })
  })
})

export const {
  useFetchTodosQuery,
  useAddTodoMutation,
  useChangeTodoMutation,
  useRemoveTodoMutation,
  useLazyFetchTodosQuery
} = todoApi
