import { CaretRight } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

type ListItemProps = {
  id: string;
  image: string;
  name: string;
  symbol: string;
};

export default function ListItem(props: ListItemProps) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.popoverItem}
      onClick={() => navigate(`/coins/${props.id}`)}
    >
      <div className={styles.leftContent}>
        <img src={props.image} alt={`${props.name}-img`} />
        <div>
          <p>{props.name}</p>
          <span>{props.symbol}</span>
        </div>
      </div>
      <CaretRight />
    </div>
  );
}
