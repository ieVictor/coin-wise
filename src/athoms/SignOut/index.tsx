import { SignOut } from '@phosphor-icons/react';
import styles from './styles.module.css';
import useAuth from '@Services/useAuth';

export default function SignOutButton() {
  const { logout } = useAuth();

  return (
    <button onClick={() => logout()} className={styles.buttonWrapper}>
      <SignOut />
    </button>
  );
}
