import { TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
    onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
    return (
        <header >
            <h1 className="text-3xl font-bold text-center mb-3">To do App🐺</h1>
            <CreateTodo saveTodo={onAddTodo}/>
        </header>
    )
}