import { useState } from "react"
import { Todos } from "./components/Todos"
import { FilterValue, Todo, TodoTitle, type TodoId } from "./types"
import { TODO_FILTERS } from "./consts"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"

export const App = () => {
  // Obtengo los todos de localStorage, vienen en formato json
  const localTodos = localStorage.getItem('todos') ? localStorage.getItem('todos') : ''
  // Los transformo a un objeto de javascript con JSON.parse, o devuelvo un arreglo vacio si no hay nada.
  const initialTodos = localTodos ? JSON.parse(localTodos) : [];
  // Asigno ese arreglo de objetos de todos a mi variable todos.
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  // Tenemos un estado para el filtro seleccionado, que por defecto es TODO_FILTERS.ALL
  // FilterValue tiene los tipos que puede ser el filtro, por ejemplo 'all', 'active', 'completed'
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  // Creamos una función para manejar la eliminación de un todo, extraemos el valor de id del objeto TodoId
  // TodoId es un objeto que tiene un id de tipo number (lo creamos en los types)
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }
  // Creamos una función para manejar la completitud de un todo, extraemos el valor de id del objeto TodoId, no devuelve nada
  const handleCompleted = ({ id }: TodoId): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        // return {...todo, completed: !todo.completed}
        todo.completed = !todo.completed
        return todo
      }
      return todo
    })
    setTodos(newTodos)

  }
  // Creamos una función para manejar el cambio de filtro, recibimos un filter de tipo FilterValue, no devuelve nada
  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }
  // Contamos la cantidad de todos activos al filtar solo los que no estén completados
  const activeCount = todos.filter(todo => !todo.completed).length
  // El contador de todos activos son todos los todos menos los completados obvio
  const completedCount = todos.length - activeCount

  // Filtramos los todos según el filtro seleccionado, ese nuevo array filteredTodos se lo mandamos como prop al componente Todos
  const filteredTodos = todos.filter(todo => {
    switch (filterSelected) {
      case TODO_FILTERS.ACTIVE:
        return !todo.completed
      case TODO_FILTERS.COMPLETED:
        return todo.completed
      default:
        return todo
    }
  })

  const handleRemoveAllCompleted =():void =>{
    const newTodos = todos.filter(todo => todo.completed !== true)
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }
  const handleAddTodo = ({title}:TodoTitle):void =>{
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }
  return (
    <div className="w-screen h-screen flex flex-col mx-auto p-8 gap-4 max-w-[30rem]">
      <Header onAddTodo={handleAddTodo}/>
      {/* Al componente Todos le pasamos los todos, la función para eliminar un todo y la función para completar un todo */}
      <Todos
        todos={filteredTodos}
        onRemoveTodo={handleRemove}
        onCompleteTodo={handleCompleted}
      />
      {/* Al componente Footer le pasamos la función para cambiar el filtro,
      el contador de todos activos, el contador de todos completados, el filtro 
      seleccionado y la función para manejar el cambio de filtro */}
      <Footer
        handleFilterChange={handleFilterChange}
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
      />
    </div>
  )
}
