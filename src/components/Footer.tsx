// import { useState } from "react";
import { Filters } from "./Filters";
import { type FilterValue } from "../types";

interface Props {
  onClearCompleted: () => void;
  completedCount: number;
  activeCount: number;
  filterSelected: FilterValue;
  handleFilterChange: (filter: FilterValue) => void;

}

export const Footer: React.FC<Props> = ({
  completedCount = 0,

  filterSelected,
  handleFilterChange,
  onClearCompleted,
}) => {
  return (
    <footer className="flex flex-col justify-center items-center text-nowrap gap-4">
     
      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      >
      </Filters>
      {
        !!completedCount && (
          <button
            className="text-nowrap"
            onClick={() => onClearCompleted()}
          >
            Limpiar Completados
          </button>
        )
      }
    </footer>
  )
}