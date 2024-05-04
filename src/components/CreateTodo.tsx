import { useState } from "react"
import { TodoTitle } from "../types"
interface Props {
    saveTodo: ({ title }: TodoTitle) => void
}
export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inputValue, setInputValue] = useState('')
    const [inputError, setInputError] = useState<string | null>(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setInputError(null)
        if (inputValue === '' || inputValue === null) return
        const blocked = inputValue.split(' ')
        const flag = blocked.some(word => word.length >= 20)
        if (flag === false) {
            console.log(flag)
            saveTodo({ title: inputValue })
            setInputValue('')
        } else {
            setInputError('Contiene palabra muy larga..')
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative">

                <input
                    value={inputValue}
                    className="input input-bordered w-full "
                    type="text"
                    onChange={(e) => { setInputValue(e.target.value) }}
                    placeholder="Agrega una nueva tarea :)"
                    autoFocus
                />
                <button className="btn btn-square bg-emerald-500 text-black absolute right-0 scale-75 hover:bg-emerald-400">
                    add
                </button>
            </div>
            <div className="m-5">
                {inputError && <h1>{inputError}</h1>}
            </div>


        </form>
    )
}