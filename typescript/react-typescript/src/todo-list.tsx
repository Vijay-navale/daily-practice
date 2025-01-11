import React from 'react'

interface TodoListInf{
  todos: {}[]
}

const TodoList: React.FC<TodoListInf> = ({todos}) => {
  return (
    <div>TodoList</div>
  )
}

export default TodoList