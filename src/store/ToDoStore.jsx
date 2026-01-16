import { create } from "zustand"
import { persist } from "zustand/middleware"
import moment from "moment"

// export const useToDoStore = create(persist(set => ({
//   todos: [],
//   lastCompletedId: null,

//   addTodo: (text) => set((state) => ({ todos: [...state.todos, { text, completed: false, id: Date.now(), createdAt: moment().valueOf() }] })),

//   removeTodo: (id) => set((state) => ({ todos: state.todos.filter(t => t.id !== id) })),

//   toggleTodo: (id) => set((state) => ({ todos: state.todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t) }))
// }), {
//   name: "todo-storage"

// }))

export const useToDoStore = create(persist(set => ({
  todos: [],
  lastCompletedId: null,

  addTodo: (text) => set((state) => ({ todos: [...state.todos, { text, completed: false, id: Date.now(), createdAt: moment().valueOf() }] })),

  removeTodo: (id) => set((state) => ({ todos: state.todos.filter(t => t.id !== id) })),

  toggleTodo: (id) => set((state) => {

    const todoToToggle = state.todos.find(t => t.id === id)

    const isNowCompleted = todoToToggle && !todoToToggle.completed

    return {
      todos: state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo),

      lastCompletedId: isNowCompleted ? id : null
    }
  }),

  resetConfetti: () => set({ lastCompletedId: null })

}), {
  name: "todo-storage"

}))
