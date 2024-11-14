import React, { useState, useMemo } from "react";
import styles from "./styles.module.css";

type CoinConverterProps = {
  coinCode?: string;
  usdPrice: number;
};

function CoinConverter(props: CoinConverterProps) {
  const [coinValue, setCoinValue] = useState(1);

  const totalUsdPrice = useMemo(() => {
    return coinValue * props.usdPrice;
  }, [coinValue, props.usdPrice]);

  const handleCoinValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCoinValue(Number(event.target.value));
  };

  return (
    <div className={styles.coinConverter}>
      <h2>BTC Converter</h2>
      <div className={styles.converterInputWrapper}>
        <div className={styles.converterInputBackgroundWrapper}>
          <input
            type="number"
            min={1}
            value={coinValue}
            onChange={handleCoinValueChange}
          />
          <span>{props.coinCode?.toUpperCase() ?? "COIN"}</span>
        </div>
      </div>
      <div className={styles.converterInputWrapper}>
        <div className={styles.converterInputBackgroundWrapper}>
          <input
            type="text"
            value={totalUsdPrice.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
            readOnly
          />
          <span>USD</span>
        </div>
      </div>
    </div>
  );
}

export default CoinConverter;
