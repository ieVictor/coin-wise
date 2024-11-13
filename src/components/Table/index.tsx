import { CaretUp } from '@phosphor-icons/react';
import TableItem from '@athoms/TableItem';
import styles from './styles.module.css';
import ROW_SIZE from './constants';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
} from '@mui/material';
import { useState } from 'react';
import { Cryptocurrency } from '@Types/Cryptocurrency';

const cryptoData: Cryptocurrency = {
  id: 'bitcoin',
  symbol: 'btc',
  name: 'Bitcoin',
  image:
    'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
  current_price: 70187,
  market_cap: 1381651251183,
  market_cap_rank: 1,
  fully_diluted_valuation: 1474623675796,
  total_volume: 20154184933,
  high_24h: 70215,
  low_24h: 68060,
  price_change_24h: 2126.88,
  price_change_percentage_24h: 3.12502,
  market_cap_change_24h: 44287678051,
  market_cap_change_percentage_24h: 3.31157,
  circulating_supply: 19675987,
  total_supply: 21000000,
  max_supply: 21000000,
  ath: 73738,
  ath_change_percentage: -4.77063,
  ath_date: '2024-03-14T07:10:36.635Z',
  atl: 67.81,
  atl_change_percentage: 103455.83335,
  atl_date: '2013-07-06T00:00:00.000Z',
  roi: null,
  last_updated: '2024-04-07T16:49:31.736Z',
};

export default function Table() {
  const [rowsValue, setRowsValue] = useState<number>(50);

  return (
    <>
      <table className={styles.tableWrapper}>
        <tr
          style={{
            height: 36,
            borderBottomWidth: 2,
            borderBottomColor: 'black',
          }}
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
          <th style={{ width: ROW_SIZE.LARGE, justifyContent: 'end' }}>
            Price
          </th>
          <th style={{ width: ROW_SIZE.MEDIUM, justifyContent: 'end' }}>24h</th>
          <th style={{ width: ROW_SIZE.LARGE, justifyContent: 'end' }}>
            24h volume
          </th>
          <th style={{ width: ROW_SIZE.LARGE, justifyContent: 'end' }}>
            Market cap
          </th>
        </tr>
        {Array.from(Array(rowsValue)).map(() => (
          <TableItem {...cryptoData} />
        ))}
      </table>
      <div className={styles.paginationWrapper}>
        <p>
          Showing <strong>1 to {rowsValue}</strong> of <strong>15126</strong>{' '}
          results
        </p>
        <Pagination
          size="medium"
          color="primary"
          variant="outlined"
          shape="circular"
          hideNextButton
          hidePrevButton
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="rows-select-label">Rows</InputLabel>
          <Select
            labelId="rows-select-label"
            label="Rows"
            id="rows-select"
            autoWidth
            value={rowsValue}
            onChange={(event) => setRowsValue(Number(event.target.value))}
            size="small"
          >
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={200}>200</MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
}
