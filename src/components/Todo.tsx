// Importamos el tipo TodoId, y el tipo Todo desde el archivo types.ts
// TodoId contiene un objeto con una propiedad id de tipo number
// TodoType contiene una interfaz con las propiedades id, title y completed
import { type TodoId, type Todo as TodoType } from "../types"

// Creamos una interfaz Props que extiende de TodoType
// Le agrego dos funciones, onRemoveTodo y onCompleteTodo
interface Props extends TodoType {
    onRemoveTodo: ({ id }: TodoId) => void
    onCompleteTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onCompleteTodo }) => {
    return (
        <div className="flex gap-2 items-center justify-between ">
            <div className="flex gap-2 justify-center items-center max-w-[30rem]">
                  <input type="checkbox" className="checkbox" checked={completed} onChange={() => onCompleteTodo({ id })} />
                <label htmlFor="" className="max-w-[18rem] line-clamp-3">{title}</label>
            </div>
          
            {/* Cuando se toca el botón de eliminar, se llama a la función onRemoveTodo con el id del todo */}
            <button className="btn btn-circle scale-75">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => onRemoveTodo({ id })} className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    )
}