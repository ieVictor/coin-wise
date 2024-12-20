import { Button } from '@mui/material';
import styles from './styles.module.css';
import coinImage from '../../../assets/Crypto.png';
import { CaretRight } from '@phosphor-icons/react';
export default function HeroSection() {
  return (
    <section>
      <main className={styles.heroWrapper}>
        <div>
          <h1>The Foremost Cryptocurrency Platform</h1>
          <p>
            Explore a comprehensive suite of over 100 peretual and quaterly
            futures in crypto
          </p>
          <a href="#tableCoins">
            <Button
              variant="contained"
              color="primary"
              endIcon={<CaretRight size={16} />}
            >
              exlore some coins
            </Button>
          </a>
        </div>
        <figure>
          <img src={coinImage} alt="Crypto" />
        </figure>
      </main>
    </section>
  );
}
