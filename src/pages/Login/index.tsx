import Footer from '@Components/Footer';
import styles from './styles.module.css';
import { Button, TextField } from '@mui/material';
import useAuth from '@Services/useAuth';
import { useState } from 'react';
import { LoginResponse } from '@Types/User';
import { Warning } from '@phosphor-icons/react';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [error, setError] = useState<LoginResponse | null>(null);

  const handleSubmit = () => {
    const response = login(email, pwd);
    if (response.status === 'error') setError(response);
  };

  return (
    <div className={styles.loginWrapper}>
      <main className={styles.mainWrapper}>
        <div className={styles.title}>
          <h1>
            Coin<p>Wise</p>
          </h1>
          <span>
            Explore a comprehensive suite of over 100 peretual and quaterly
            futures in crypto
          </span>
        </div>

        <form className={styles.formWrapper}>
          <p>Login</p>
          <div className={styles.inputsWrapper}>
            <TextField
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(null);
              }}
              style={{ width: '100%' }}
              error={error?.field === 'email'}
              type="email"
              label="Email"
              name="email"
              required
            />
            <TextField
              value={pwd}
              onChange={(e) => {
                setPwd(e.target.value);
                setError(null);
              }}
              style={{ width: '100%' }}
              error={error?.field === 'password'}
              type="password"
              label="Password"
              name="password"
              required
            />
            {error && (
              <span>
                <Warning size={16} />
                {error.msg}
              </span>
            )}
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              disabled={error ? true : false}
              size="large"
              color="primary"
              variant="contained"
              onClick={handleSubmit}
            >
              Login
            </Button>
            <span>
              By continuing, you agree to CoinWinse, Terms of Service and
              acknowledge you've read our Privacy Policy
            </span>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
}
