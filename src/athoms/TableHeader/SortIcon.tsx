import { Cryptocurrency } from '@Types/Cryptocurrency';
import { SortDirection } from './types';

const SortIcon = ({
  field,
  sortField,
  sortDirection,
}: {
  field: keyof Cryptocurrency;
  sortField: keyof Cryptocurrency | null;
  sortDirection: SortDirection;
}) => {
  if (sortField !== field) return null;
  return sortDirection === 'asc' ? (
    <CaretUp size={12} weight="fill" />
  ) : sortDirection === 'desc' ? (
    <CaretDown size={12} weight="fill" />
  ) : null;
};
