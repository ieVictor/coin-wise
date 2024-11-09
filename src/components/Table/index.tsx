import { CaretUp } from '@phosphor-icons/react';
import styles from './styles.module.css';
import TableItem from './TableItem';
import ROW_SIZE from './constants';

export default function Table() {
  return (
    <table className={styles.tableWrapper}>
      <tr
        style={{ height: 36, borderBottomWidth: 2, borderBottomColor: 'black' }}
      >
        <th style={{ width: ROW_SIZE.X_SMALL }}></th>
        <th
          style={{
            width: ROW_SIZE.SMALL,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CaretUp weight="fill" size={16} />#
        </th>
        <th style={{ width: ROW_SIZE.X_LARGE }}>Coin</th>
        <th style={{ width: ROW_SIZE.LARGE, justifyContent: 'end' }}>Price</th>
        <th style={{ width: ROW_SIZE.MEDIUM, justifyContent: 'end' }}>24h</th>
        <th style={{ width: ROW_SIZE.LARGE, justifyContent: 'end' }}>
          24h volume
        </th>
        <th style={{ width: ROW_SIZE.LARGE, justifyContent: 'end' }}>
          Market cap
        </th>
      </tr>
      {Array.from(Array(50)).map(() => (
        <TableItem />
      ))}
    </table>
  );
}
