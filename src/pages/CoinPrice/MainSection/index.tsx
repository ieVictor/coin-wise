import { Breadcrumbs, Link } from "@mui/material";
import styles from "./styles.module.css";
import { CaretRight } from "@phosphor-icons/react";
import Coin from "@Components/Coin";
import MarketInfo from "@Components/MarketInfo";
import Info from "@Components/Info";
import CoinConverter from "@Components/CoinConverter";
import CoinHistoricalPrice from "@Components/CoinHistoricalPrice";
import { useCryptoById } from "@Services/useCrypto";
import { useParams } from "react-router-dom";

export default function MainSection() {
  const { id } = useParams();
  const data = useCryptoById(id ?? "");
  console.log(data);
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
        <div className={styles.mainContentInfos}>
          <MarketInfo
            marketCap={1511334584361}
            fullyDilutedValuation={1604578311000}
            tradingVolume={54231301407}
            circulatingSupply={19779668}
            totalSupply={21000000}
            maxSupply={21000000}
          />
          <Info
            Website={["bitcoin.org", "whitepaper"]}
            Explorers={[
              "Arkham",
              "Blockchair",
              "Btc",
              "TokenView",
              "Oklink",
              "3xpl",
            ]}
            Wallets={["Trezor", "Electrum", "Xdefi", "SafePal"]}
            Community={["Twitter", "Facebook", "bitcointalk.org"]}
            SearchOn={["Twitter"]}
            SourceCode={["Github"]}
            ApiId="bitcoin"
            Chains={["Bitcoin Ecosystem"]}
            Categories={[
              "Cryptocurrency",
              "Layer 1 (L1)",
              "FTX Holdings",
              "Proof of Work (PoW)",
              "GMCI 30 Index",
            ]}
          />
          <div className={styles.coinConverterWrapper}>
            <CoinConverter usdPrice={76479} coinCode="BTC" />
            <hr />
            <CoinHistoricalPrice
              coinCode="BTC"
              allTimeHigh={0}
              allTimeLow={0}
              high7d={0}
              low7d={0}
              high24h={0}
              low24h={0}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
