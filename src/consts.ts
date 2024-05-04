// Defino los tipos, le agrego as const para que sean constantes literales (solo lectura)
export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const;

// Defino los botones de filtros, cada uno tiene un literal y un href
// Su clave esta entre corchetes para que sea dinámica
// Es decir, si cambio el valor de "ALL" en TODO_FILTERS, se actualiza en FILTERS_BUTTONS
export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL]: {
        literal: 'Todos',
        href: `/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]: {
        literal: 'Activos',
        href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]: {
        literal: 'Completados',
        href: `/?filter=${TODO_FILTERS.COMPLETED}`
    }
} as const;