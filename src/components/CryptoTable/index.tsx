import { useMemo, useState } from 'react';
import TableItem from '../../athoms/TableItem';
import TableHeader from '../../athoms/TableHeader';
import { Cryptocurrency } from '@Types/Cryptocurrency';
import styles from './styles.module.css';
import { CryptoTableProps, SortDirection } from './types';
import { Button } from '@mui/material';
import { Plus } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export default function CryptoTable({ data }: CryptoTableProps) {
  const navigate = useNavigate();
  const [sortConfig, setSortConfig] = useState<{
    field: keyof Cryptocurrency | null;
    direction: SortDirection;
  }>({
    field: null,
    direction: null,
  });

  const sortedData = useMemo(() => {
    if (!sortConfig.field || !sortConfig.direction) return data;

    const field = sortConfig.field as keyof Cryptocurrency;
    const multiplier = sortConfig.direction === 'asc' ? 1 : -1;

    return [...data].sort((a, b) => {
      const aValue = a[field];
      const bValue = b[field];

      if (aValue === undefined) return 1;
      if (bValue === undefined) return -1;

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue) * multiplier;
      }

      return ((aValue as number) - (bValue as number)) * multiplier;
    });
  }, [data, sortConfig]);

  const handleSort = (
    field: keyof Cryptocurrency,
    direction: SortDirection
  ) => {
    setSortConfig({ field, direction });
  };

  return (
    <div className={styles.contentWrapper}>
      <Button
        onClick={() => navigate('/addCoin')}
        startIcon={<Plus />}
        variant="contained"
        color="primary"
        style={{ alignSelf: 'end' }}
      >
        Add Coin
      </Button>
      <table className={styles.tableWrapper}>
        <thead>
          <TableHeader onSort={handleSort} />
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <TableItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
