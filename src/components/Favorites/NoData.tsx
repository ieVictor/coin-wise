import { SmileySad } from '@phosphor-icons/react';
import styles from './styles.module.css';

export default function NoData() {
  return (
    <div className={styles.emptyFavorites}>
      <SmileySad size={64} weight="duotone" />
      <p>No favorites cryptos added yet!</p>
    </div>
  );
}
