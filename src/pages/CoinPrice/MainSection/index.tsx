import { Breadcrumbs, CircularProgress, Container, Link } from '@mui/material';
import styles from './styles.module.css';
import { CaretRight } from '@phosphor-icons/react';
import Coin from '@Components/Coin';
import MarketInfo from '@Components/MarketInfo';
import Info from '@Components/Info';
import CoinConverter from '@Components/CoinConverter';
import CoinHistoricalPrice from '@Components/CoinHistoricalPrice';
import { useCryptoById } from '@Services/useCrypto';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logo from '@Components/Logo';
export default function MainSection() {
  const { id } = useParams();
  const { data, isLoading } = useCryptoById(id ?? '');
  const navigate = useNavigate();

  if (isLoading)
    return (
      <div className={styles.loadingWrapper}>
        <CircularProgress />
        <Logo size="normal" />
      </div>
    );

  return (
    data && (
      <Container>
        <main className={styles.mainWrapper}>
          <div className={styles.breadcrumb}>
            <Breadcrumbs
              separator={<CaretRight size={16} />}
              aria-label="breadcrumb"
            >
              <Link
                underline="hover"
                color="inherit"
                onClick={() => navigate('/')}
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
            percentage={data.market_cap_change_percentage_24h}
            img={data.image}
            price={data.current_price}
            rank={data.market_cap_rank}
            symbol={data.symbol.toLocaleUpperCase()}
          />
          <div className={styles.mainContentInfos}>
            <MarketInfo
              marketCap={data.market_cap}
              fullyDilutedValuation={data.fully_diluted_valuation}
              tradingVolume={54231301407}
              circulatingSupply={data.circulating_supply}
              totalSupply={data.total_supply}
              maxSupply={data.max_supply}
            />
            <Info
              Website={['www.homepage.com', 'www.whitepaper.com']}
              Explorers={[
                'Arkham',
                'Blockchair',
                'Btc',
                'TokenView',
                'Oklink',
                '3xpl',
              ]}
              Wallets={['Trezor', 'Electrum', 'Xdefi', 'SafePal']}
              Community={['Twitter', 'Facebook']}
              SearchOn={['Twitter']}
              SourceCode={['Github']}
              ApiId={data.id}
              Chains={['Ecosystem']}
              Categories={['CryptoCoin']}
            />
            <div className={styles.coinConverterWrapper}>
              <CoinConverter
                usdPrice={data.current_price}
                coinCode={data.symbol.toUpperCase()}
              />
              <hr />
              <CoinHistoricalPrice
                coinCode={data.symbol.toUpperCase()}
                allTimeHigh={data.ath}
                allTimeLow={data.atl}
                high24h={data.high_24h}
                low24h={data.low_24h}
              />
            </div>
          </div>
        </main>
      </Container>
    )
  );
}
