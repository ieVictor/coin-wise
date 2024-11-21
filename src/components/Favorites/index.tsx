import { Heart } from '@phosphor-icons/react';
import styles from './styles.module.css';
import React, { useState } from 'react';
import { Popover } from '@mui/material';
import useFavorites from '@Services/useFavorites';

export default function Favorites() {
  const [fill, setFill] = useState<boolean>(false);
  const { cryptos } = useFavorites();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

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
      ></Popover>
    </>
  );
}
