import { Breadcrumbs, Link } from "@mui/material";
import styles from "./styles.module.css";
import { CaretRight } from "@phosphor-icons/react";
import Coin from "@Components/Coin";

export default function MainSection() {
  return (
    <div className="container">
      <main className={styles.mainWrapper}>
        <div className={styles.breadcrumb}>
          <Breadcrumbs
            separator={<CaretRight size={16} />}
            aria-label="breadcrumb"
          >
            <Link underline="hover" color="inherit" href="/">
              <strong>Cryptocurrencies</strong>
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Bitcoin
            </Link>
          </Breadcrumbs>
        </div>
        <Coin
          name="Bitcoin"
          percentage={0.8}
          price={76448.79}
          rank={1}
          symbol="BTC"
        />
      </main>
    </div>
  );
}
