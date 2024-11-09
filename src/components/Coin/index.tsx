import styles from "./styles.module.css";

type CoinProps = {
  name: string;
  image: string;
  price: number;
};
export default function Coin() {
  return (
    <div className={styles.coinWrapper}>
      <figure className={styles.imgWrapper}>
        <img
          src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
          alt="Coin"
        />
      </figure>
      <div className={styles.coinName}>
        <p>
          Bitcoin <span>BTC</span>
        </p>
      </div>
      <div className={styles.coinRank}>
        <p>#1000</p>
      </div>
    </div>
  );
}
