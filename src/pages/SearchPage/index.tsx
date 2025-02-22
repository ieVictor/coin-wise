import Footer from '@Components/Footer';
import { useCryptoListBySearch } from '@Services/useCrypto';
import styles from './styles.module.css';
import { Link, useLocation } from 'react-router-dom';
import {
  Avatar,
  CircularProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

function SearchPage() {
  const query = useQuery();
  const searchTerm = query.get('q') || '';
  const { data, isLoading, isError } = useCryptoListBySearch(searchTerm);

  return (
    <>
      <section className={styles.sectionWrapper} id="tableCoins">
        <hr />
        <h1>Trade, Exchange, Stake and More with All popular Coins</h1>
        {isLoading && (
          <section className={styles.sectionWrapper}>
            <CircularProgress />
          </section>
        )}
        {data?.coins ? (
          data.coins.length > 0 ? (
            <>
              <List style={{ height: '100dvh' }}>
                {data.coins.map((coin) => (
                  <ListItem
                    key={coin.id}
                    component={Link}
                    to={`/coins/${coin.id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <ListItemAvatar>
                      <Avatar alt={coin.name} src={coin.thumb} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={coin.name}
                      secondary={`Rank #${coin.market_cap_rank}`}
                    />
                  </ListItem>
                ))}
              </List>
            </>
          ) : (
            <section className={styles.sectionWrapper}>
              <Typography>No results for this search.</Typography>
            </section>
          )
        ) : isError ? (
          <Typography>Error on search.</Typography>
        ) : null}

        <img
          src="/src\assets\ApeCoin_3D.png"
          alt="ApeCoin"
          style={{ position: 'absolute', right: -200, top: 80 }}
        />
        <img
          src="/src\assets\Bitcoin_3D.png"
          alt="ApeCoin"
          style={{ position: 'absolute', left: -120, top: 980 }}
        />
        <img
          src="/src\assets\EOS_3D.png"
          alt="ApeCoin"
          style={{ width: 280, position: 'absolute', right: -150, top: 1880 }}
        />
      </section>
      <Footer />
    </>
  );
}

export default SearchPage;
