import React from "react";
import styles from "./styles.module.css";

export default function Logo() {
  return (
    <div>
      <span>Coin</span>
      <span className={styles.logoColor}>Wise.</span>
    </div>
  );
}
