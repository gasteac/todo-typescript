import { TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
    onAddTodo: ({ title }: TodoTitle) => void
    activeCount: number,
}

export const Header: React.FC<Props> = ({ onAddTodo, activeCount }) => {
    return (
        <header>
            <h1 className="text-5xl font-bold text-center mb-8 tracking-wider">TODO APP📚</h1>
            <CreateTodo saveTodo={onAddTodo}/>
            <p className={`mt-3 ${ activeCount === 0 ? 'text-emerald-700' : ''}`}>
            <strong>{activeCount}</strong> {activeCount < 2 && activeCount!= 0  ? 'Tarea Pendiente' : 'Tareas Pendientes'}</p>
        </header>
    )
}