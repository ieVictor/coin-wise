import styles from "./styles.module.css";
type CoinHistoricalPriceProps = {
  coinCode?: string;
  high24h: number;
  low24h: number;
  high7d: number;
  low7d: number;
  allTimeHigh: number;
  allTimeLow: number;
};
function CoinHistoricalPrice(props: CoinHistoricalPriceProps) {
  return (
    <div className={styles.historicalPrice}>
      <h2>{props.coinCode ?? "COIN"} Historical Price</h2>
      <div className={styles.historicalPriceWrapper}>
        <p>24h Range</p>
        <div className={styles.priceWrapper}>
          <p>
            {props.low24h.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 4,
              maximumFractionDigits: 6,
            })}
          </p>
          <p> - </p>
          <p>
            {props.high24h.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 4,
              maximumFractionDigits: 6,
            })}
          </p>
        </div>
      </div>
      <div className={styles.historicalPriceWrapper}>
        <p>7d Range</p>
        <div className={styles.priceWrapper}>
          <p>
            {props.low7d.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 4,
              maximumFractionDigits: 6,
            })}
          </p>
          <p> - </p>
          <p>
            {props.high7d.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 4,
              maximumFractionDigits: 6,
            })}
          </p>
        </div>
      </div>
      <div className={styles.historicalPriceWrapper}>
        <p>All-Time High</p>
        <div className={styles.priceWrapper}>
          <p>
            {props.allTimeLow.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 4,
              maximumFractionDigits: 6,
            })}
          </p>
          <p> - </p>
          <p>
            {props.allTimeLow.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 4,
              maximumFractionDigits: 6,
            })}
          </p>
        </div>
      </div>
      <div className={styles.historicalPriceWrapper}>
        <p>All-Time Low</p>
        <div className={styles.priceWrapper}>
          <p>
            {props.allTimeLow.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 4,
              maximumFractionDigits: 6,
            })}
          </p>
          <p> - </p>
          <p>
            {props.allTimeHigh.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 4,
              maximumFractionDigits: 6,
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoinHistoricalPrice;
