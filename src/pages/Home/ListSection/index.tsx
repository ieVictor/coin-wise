import CryptoTable from '@Components/CryptoTable';
import styles from './styles.module.css';
import { useCryptoList } from '@Services/useCrypto';
import TablePagination from '@Components/CryptoTable/TablePagination';
import { useState } from 'react';
import { Rows } from '@Components/CryptoTable/types';

export default function ListSection() {
  const [rows, setRows] = useState<Rows>(25);
  const [page, setPage] = useState<number>(1);
  const { data } = useCryptoList(rows, 'usd', page);
  console.log(data);

  return (
    <section className={styles.sectionWrapper}>
      <hr />
      <h1>Trade, Exchange, Stake and More with All popular Coins</h1>

      {/* Coins list */}
      {data && (
        <>
          <CryptoTable data={data} />
          <TablePagination
            rows={rows}
            onRowsChange={setRows}
            onPageChange={setPage}
            itens={15226}
          />
        </>
      )}

      {/* Floating Currencies */}
      <img
        src="/src\assets\ApeCoin_3D.png"
        alt="ApeCoin"
        style={{ position: 'absolute', right: -200, top: 80 }}
      />
      <img
        src="/src\assets\Bitcoin_3D.png"
        alt="ApeCoin"
        style={{ position: 'absolute', left: -120, top: 980 }}
      />
      <img
        src="/src\assets\EOS_3D.png"
        alt="ApeCoin"
        style={{ width: 280, position: 'absolute', right: -150, top: 1880 }}
      />
    </section>
  );
}
