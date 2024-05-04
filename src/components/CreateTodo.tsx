import { useState } from "react"
import { TodoTitle } from "../types"
interface Props {
    saveTodo: ({ title }: TodoTitle) => void
}
export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (inputValue === '' || inputValue === null) return
        saveTodo({ title: inputValue })
        setInputValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="relative">
                <input
                value={inputValue}
                className="input input-bordered w-full "
                type="text"
                onChange={(e) => {setInputValue(e.target.value)}}
                placeholder="Agrega una nueva tarea :)"
                autoFocus
            />
                <button className="btn btn-square bg-emerald-500 text-black absolute right-0 scale-75 hover:bg-emerald-400">
                    add
                </button>
            </div>
            
            
        </form>
    )
}