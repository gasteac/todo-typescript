// Importamos el tipo Props desde el archivo types.ts
// Este contiene la interfaz Props que es un objeto que tiene una propiedad todos que es un array de objetos de tipo Todo
import { type Props } from "../types"
// Importamos el componente Todo desde el archivo Todo.tsx
import { Todo } from "./Todo"
import { useAutoAnimate } from '@formkit/auto-animate/react'
// Creamos un componente llamado Todos que recibe un objeto de tipo Props
// Este componente recibe los todos, la función para eliminar un todo y la función para completar un todo
// Agregamos el tipo React.FC para indicar que es un componente funcional, y le pasamos el tipo Props
export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onCompleteTodo }) => {
    const [parent] = useAutoAnimate(/* optional config */)
    return (
        <ul ref={parent} className="flex flex-col gap-2 w-full text-[1rem]">
            {todos.length === 0 ? (<h1>No hay todos :D</h1>) : (todos.map(todo => (
                <li className={` ${todo.completed ? 'completed' : ''}`} key={todo.id} >
                    {/* Al componente Todo le pasamos todos las propiedades del todo actual, la función para eliminar un todo y la función para completar un todo */}
                    <Todo {...todo} onRemoveTodo={onRemoveTodo} onCompleteTodo={onCompleteTodo} />
                </li>
            )))}

        </ul>
    )
} 