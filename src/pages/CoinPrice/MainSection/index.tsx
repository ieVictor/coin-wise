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
import { useNavigate } from "react-router-dom";
export default function MainSection() {
  const { id } = useParams();
  const { data } = useCryptoById(id ?? "");
  const navigate = useNavigate();
  console.log(data);
  return (
    data && (
      <div className="container">
        <main className={styles.mainWrapper}>
          <div className={styles.breadcrumb}>
            <Breadcrumbs
              separator={<CaretRight size={16} />}
              aria-label="breadcrumb"
            >
              <Link
                underline="hover"
                color="inherit"
                onClick={() => navigate("/")}
              >
                <strong>Cryptocurrencies</strong>
              </Link>
              <Link underline="hover" color="inherit" href="/">
                {data.name}
              </Link>
            </Breadcrumbs>
          </div>
          <Coin
            name={data.name}
            percentage={data.market_data.market_cap_change_percentage_24h}
            img={data.image.large}
            price={data.market_data.current_price.usd}
            rank={data.market_cap_rank}
            symbol={data.symbol.toLocaleUpperCase()}
          />
          <div className={styles.mainContentInfos}>
            <MarketInfo
              marketCap={data.market_data.market_cap.usd}
              fullyDilutedValuation={
                data.market_data.fully_diluted_valuation.usd
              }
              tradingVolume={54231301407}
              circulatingSupply={data.market_data.circulating_supply}
              totalSupply={data.market_data.total_supply}
              maxSupply={data.market_data.max_supply}
            />
            <Info
              Website={[...data.links.homepage, data.links.whitepaper]}
              Explorers={[
                "Arkham",
                "Blockchair",
                "Btc",
                "TokenView",
                "Oklink",
                "3xpl",
              ]}
              Wallets={["Trezor", "Electrum", "Xdefi", "SafePal"]}
              Community={[
                "Twitter",
                "Facebook",
                ...data.links.official_forum_url,
              ]}
              SearchOn={["Twitter"]}
              SourceCode={["Github"]}
              ApiId={data.id}
              Chains={["Ecosystem"]}
              Categories={data.categories}
            />
            <div className={styles.coinConverterWrapper}>
              <CoinConverter
                usdPrice={data.market_data.current_price.usd}
                coinCode={data.symbol.toUpperCase()}
              />
              <hr />
              <CoinHistoricalPrice
                coinCode={data.symbol.toUpperCase()}
                allTimeHigh={data.market_data.ath.usd}
                allTimeLow={data.market_data.atl.usd}
                high7d={0}
                low7d={0}
                high24h={data.market_data.high_24h.usd}
                low24h={data.market_data.low_24h.usd}
              />
            </div>
          </div>
        </main>
      </div>
    )
  );
}
