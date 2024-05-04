export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

// En TS para decirle que quiero un array de tal tipo es tipo[] o Array<tipo>
// export type ListOfTodo = Array<Todo>;
export type ListOfTodo = Todo[];

export interface Props {
    todos: Todo[];
    onRemoveTodo: ({id}: TodoId) => void;
    onCompleteTodo: ({id}: TodoId) => void
}

// Con Pick le digo del objeto Todo, dame un objeto con la propiedad title
// Luego si quiero acceder a title, tengo que hacer todo.title, o utilizar destructuring
export type TodoTitle = Pick<Todo, 'title'>;
// Con Pick le digo del objeto Todo, dame un objeto con la propiedad id
// Luego si quiero acceder a id, tengo que hacer todo.id, o utilizar destructuring
export type TodoId = Pick<Todo, 'id'>;
// Con Pick le digo del objeto Todo, dame un objeto con la propiedad completed
// Luego si quiero acceder a completed, tengo que hacer todo.completed, o utilizar destructuring
export type TodoCompleted = Pick<Todo, 'completed'>;

//Obtengo los valores de todos los filtros
//Le digo, de esa caja de crayones, tráeme los colores de todos los crayones.
export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS];