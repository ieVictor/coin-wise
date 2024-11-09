import styles from './styles.module.css';
import Table from '@Components/Table';

export default function ListSection() {
  return (
    <section className={styles.sectionWrapper}>
      <hr />
      <h1>Trade, Exchange, Stake and More with All popular Coins</h1>
      <Table />
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
