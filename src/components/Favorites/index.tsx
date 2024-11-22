import { Heart } from '@phosphor-icons/react';
import styles from './styles.module.css';
import React, { useEffect, useState } from 'react';
import { Popover } from '@mui/material';
import useFavorites from '@Services/useFavorites';
import { useCryptoListWithIds } from '@Services/useCrypto';
import NoData from './NoData';
import ListItem from './ListItem';

export default function Favorites() {
  const [fill, setFill] = useState<boolean>(false);
  const { cryptos } = useFavorites();
  const [refetchTrigger, setRefetchTrigger] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  useEffect(() => {
    setRefetchTrigger((prev) => prev + 1);
  }, [cryptos]);

  const { data } = useCryptoListWithIds(cryptos, 'USD', refetchTrigger);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event?.currentTarget);
    setFill(!fill);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setFill(!fill);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <button className={styles.buttonWrapper} onClick={handleClick}>
        {cryptos.length > 0 && <span>{cryptos.length}</span>}
        <Heart
          size={16}
          weight={fill ? 'fill' : 'regular'}
          color={fill ? '#1459f1' : 'currentColor'}
        />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        style={{ marginTop: 10 }}
      >
        <div className={styles.popoverWrapper}>
          {data ? (
            data.map((crypto) => <ListItem {...crypto} key={crypto.id} />)
          ) : (
            <NoData />
          )}
        </div>
      </Popover>
    </>
  );
}
