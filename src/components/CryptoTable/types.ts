import { Cryptocurrency } from "@Types/Cryptocurrency";
import React from "react";

export type Rows = 5 | 10 | 25 | 50 | 100;
export type SortDirection = "asc" | "desc" | null;

export type TablePaginationProps = {
  rows: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
  onRowsChange: React.Dispatch<React.SetStateAction<Rows>>;
  itens?: number;
};

export type CryptoTableProps = {
  data: Cryptocurrency[];
};
