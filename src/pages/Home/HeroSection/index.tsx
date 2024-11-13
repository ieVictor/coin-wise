import { Button } from '@mui/material';
import styles from './styles.module.css';
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
          <Button
            variant="contained"
            color="primary"
            endIcon={<CaretRight size={16} />}
          >
            exlore some coins
          </Button>
        </div>
        <figure>
          <img src="/src\assets\Crypto.png" alt="Crypto" />
        </figure>
      </main>
    </section>
  );
}
