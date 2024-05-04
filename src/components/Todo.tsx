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
        <div className="flex gap-2 items-center justify-start">
            {/* Cuando se toca completado, se llama a la función onCompleteTodo con el id del todo */}
            <input type="checkbox" className="checkbox" checked={completed} onChange={() => onCompleteTodo({ id })} />
            <label htmlFor="">{title}</label>
            {/* Cuando se toca el botón de eliminar, se llama a la función onRemoveTodo con el id del todo */}
            <button className="destroy" onClick={() => onRemoveTodo({ id })}/>
        </div>
    )
}