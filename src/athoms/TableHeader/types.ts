import { Cryptocurrency } from "@Types/Cryptocurrency";

export type SortDirection = 'asc' | 'desc' | null;

export type TableHeaderProps = {
  onSort: (field: keyof Cryptocurrency, direction: SortDirection) => void;
}