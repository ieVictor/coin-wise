import { TrendDown, TrendUp } from "@phosphor-icons/react";
import styles from "./styles.module.css";

type CoinProps = {
  name: string;
  symbol: string;
  img?: string;
  price: number;
  rank: number;
  percentage: number;
};
export default function Coin({
  name = "Bitcoin",
  symbol = "BTC",
  img,
  price = 0,
  rank = 0,
  percentage = 0,
}: CoinProps) {
  return (
    <div className={styles.coin}>
      <div className={styles.coinWrapper}>
        <figure className={styles.imgWrapper}>
          <img
            src={
              img ||
              "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
            }
            alt="Coin"
          />
        </figure>
        <div className={styles.coinName}>
          <p>
            {name} <span>{symbol}</span>
          </p>
        </div>
        <div className={styles.coinRank}>
          <p># {rank}</p>
        </div>
      </div>
      <div className={styles.coinPriceWrapper}>
        <p>
          {price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 4,
            maximumFractionDigits: 6,
          })}
        </p>
        <div className={styles.coinPricePercentageWrapper}>
          <span style={{ color: percentage > 0 ? "green" : "red" }}>
            {percentage > 0 ? <TrendUp size={18} /> : <TrendDown size={18} />}
            {percentage.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
}
