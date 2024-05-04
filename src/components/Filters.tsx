// Importo los filtros y el tipo FilterValue desde el archivo consts.ts
// Los botones de filtros contienen un href y un literal para cada filtro, "all" "active" "completed"
import { FILTERS_BUTTONS } from "../consts";
// FilterValue contiene los tipos que puede ser el filtro, por ejemplo 'all', 'active', 'completed'
// export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
import { FilterValue } from "../types";

//Defino los Props que recibe el componente Filters
//onFilterChange es una función que recibe un filtro y no devuelve nada, se usa para cambiar de filtro
//filterSelected es el filtro seleccionado, de tipo FilterValue
type Props = {
    onFilterChange: (filter: FilterValue) => void;
    filterSelected: FilterValue;
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    return (
        <ul className="flex gap-2">
            {/* Como FILTERS_BUTTONS es un objeto, uso Object.entries para obtener un array de arrays */}
            {/* Y como devuelve un arreglo de arreglos, accedo a key, que seria la clave, y a href y literal que son los valores */}
            {/* key = 'all', href = '#/', literal = 'All'*/}
            {/* key = 'active', href = '#/active', literal = 'Active'*/}
            {/* key = 'completed', href = '#/completed', literal = 'Completed'*/}
            {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
                const isSelected = filterSelected === key
                const className = isSelected ? 'selected' : ''
                return (
                    <li key={key}>
                        <a
                            href={href}
                            className={className}
                            onClick={(event) => {
                                event.preventDefault()
                                //Llamo a la función onFilterChange con el filtro seleccionado
                                //Por ejemplo, si selecciono 'active', llamo a onFilterChange('active')
                                //Le asigno el type FilterValue a key, ya que key es de tipo FilterValue
                                onFilterChange(key as FilterValue)
                            }}
                        >
                            {literal}
                        </a>
                    </li>
                )
            })}

        </ul>
    )
}