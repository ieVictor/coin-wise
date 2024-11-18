import styles from "./styles.module.css";
type MarketInfoProps = {
  marketCap: number;
  fullyDilutedValuation: number | null;
  tradingVolume: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number | null;
};
function MarketInfo(props: MarketInfoProps) {
  return (
    <div className={styles.marketInfo}>
      <h2>Market Info</h2>

      <div className={styles.marketInfoWrapper}>
        <p>Market Cap</p>
        <p>
          <b>
            {(props.marketCap ?? 0).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </b>
        </p>
      </div>

      <div className={styles.marketInfoWrapper}>
        <p>Fully Diluted Valuation</p>
        <p>
          <b>
            {(props.fullyDilutedValuation ?? 0).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </b>
        </p>
      </div>

      <div className={styles.marketInfoWrapper}>
        <p>24 Hour Trading Vol</p>
        <p>
          <b>
            {(props.tradingVolume ?? 0).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </b>
        </p>
      </div>

      <div className={styles.marketInfoWrapper}>
        <p>Circulating Supply</p>
        <p>
          <b>{(props.circulatingSupply ?? 0).toLocaleString("en-US")}</b>
        </p>
      </div>

      <div className={styles.marketInfoWrapper}>
        <p>Total Supply</p>
        <p>
          <b>{(props.totalSupply ?? 0).toLocaleString("en-US")}</b>
        </p>
      </div>

      <div className={styles.marketInfoWrapper}>
        <p>Max Supply</p>
        <p>
          <b>{(props.maxSupply ?? 0).toLocaleString("en-US")}</b>
        </p>
      </div>
    </div>
  );
}

export default MarketInfo;
