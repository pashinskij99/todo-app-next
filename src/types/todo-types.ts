// import {Category} from "./category-types";

// interface CategoryTodo extends Pick<Category, 'name'> {}
export type TodoColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

export interface Todo  {
  id: string
  title: string
  category: string
  variant: TodoColor
}
