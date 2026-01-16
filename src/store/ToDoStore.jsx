import { create } from "zustand"
import { persist } from "zustand/middleware"

export const useToDoStore = create(persist(set => ({
  todos: [],
  addTodo: (text) => set((state) => ({ todos: [...state.todos, { text, completed: false, id: Date.now() }] })),
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter(t => t.id !== id) })),
  toggleTodo: (id) => set((state) => ({ todos: state.todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t) }))
}), {
  name: "todo-storage" // name of the item in the storage (must be unique)
}))
