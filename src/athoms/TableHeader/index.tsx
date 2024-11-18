import { useState } from 'react';
import { CaretUp, CaretDown } from '@phosphor-icons/react';
import ROW_SIZE from '@Components/CryptoTable/constants';
import { Cryptocurrency } from '@Types/Cryptocurrency';
import { SortDirection, TableHeaderProps } from './types';

export default function TableHeader({ onSort }: TableHeaderProps) {
  const [sortField, setSortField] = useState<keyof Cryptocurrency | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const handleSort = (field: keyof Cryptocurrency) => {
    let direction: SortDirection = 'asc';

    if (sortField === field) {
      if (sortDirection === 'asc') direction = 'desc';
      else if (sortDirection === 'desc') direction = null;
      else direction = 'asc';
    }

    setSortField(field);
    setSortDirection(direction);
    onSort(field, direction);
  };

  const SortIcon = ({ field }: { field: keyof Cryptocurrency }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? (
      <CaretUp size={12} weight="fill" />
    ) : sortDirection === 'desc' ? (
      <CaretDown size={12} weight="fill" />
    ) : null;
  };

  return (
    <tr>
      <th style={{ width: ROW_SIZE.X_SMALL }}></th>
      <th
        onClick={() => handleSort('market_cap_rank')}
        style={{
          cursor: 'pointer',
          width: ROW_SIZE.SMALL,
          justifyContent: 'center',
        }}
      >
        # <SortIcon field="market_cap_rank" />
      </th>
      <th style={{ width: ROW_SIZE.X_LARGE }}>Name</th>
      <th
        onClick={() => handleSort('current_price')}
        style={{
          cursor: 'pointer',
          textAlign: 'right',
          width: ROW_SIZE.LARGE,
          justifyContent: 'end',
        }}
      >
        Price <SortIcon field="current_price" />
      </th>
      <th
        onClick={() => handleSort('price_change_percentage_24h')}
        style={{
          cursor: 'pointer',
          textAlign: 'right',
          width: ROW_SIZE.MEDIUM,
          justifyContent: 'end',
        }}
      >
        24h % <SortIcon field="price_change_percentage_24h" />
      </th>
      <th
        onClick={() => handleSort('market_cap_change_24h')}
        style={{
          cursor: 'pointer',
          textAlign: 'right',
          width: ROW_SIZE.LARGE,
          justifyContent: 'end',
        }}
      >
        24h Volume <SortIcon field="market_cap_change_24h" />
      </th>
      <th
        onClick={() => handleSort('market_cap')}
        style={{
          cursor: 'pointer',
          textAlign: 'right',
          width: ROW_SIZE.LARGE,
          justifyContent: 'end',
        }}
      >
        Market Cap <SortIcon field="market_cap" />
      </th>
    </tr>
  );
}
