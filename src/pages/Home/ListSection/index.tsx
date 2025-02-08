import CryptoTable from '@Components/CryptoTable';
import styles from './styles.module.css';
import { useCryptoList } from '@Services/useCrypto';
import TablePagination from '@Components/CryptoTable/TablePagination';
import { useState } from 'react';
import apeCoin from '../../../assets/ApeCoin_3D.png';
import bitcoin from '../../../assets/Bitcoin_3D.png';
import eos from '../../../assets/EOS_3D.png';
import { Rows } from '@Components/CryptoTable/types';

export default function ListSection() {
  const [rows, setRows] = useState<Rows>(25);
  const [page, setPage] = useState<number>(1);
  const { data } = useCryptoList(rows, 'usd', page);

  return (
    <section className={styles.sectionWrapper} id="tableCoins">
      <hr />
      <h1>Trade, Exchange, Stake and More with All popular Coins</h1>

      {/* Coins list */}
      {data && (
        <>
          <CryptoTable data={data.coins} />
          <TablePagination
            rows={rows}
            onRowsChange={setRows}
            onPageChange={setPage}
            itens={data.pagination.total}
          />
        </>
      )}

      {/* Floating Currencies */}
      <img
        src={apeCoin}
        alt="ApeCoin"
        style={{ position: 'absolute', right: -200, top: 80 }}
      />
      <img
        src={bitcoin}
        alt="bitcoin"
        style={{ position: 'absolute', left: -120, top: 980 }}
      />
      <img
        src={eos}
        alt="EOS"
        style={{ width: 280, position: 'absolute', right: -150, top: 1880 }}
      />
    </section>
  );
}
