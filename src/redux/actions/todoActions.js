export const addTodo = (content) => {
  return {
    type: 'ADD_TODO',
    content,
  }
}

export const toggleTodo = (index) => {
  return {
    type: 'TOGGLE_TODO',
    index
  }
}

export const deleteTodo = (index) => {
  return {
    type: 'DELETE_TODO',
    index
  }
}