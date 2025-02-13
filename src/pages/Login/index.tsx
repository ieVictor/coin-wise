import Footer from '@Components/Footer';
import styles from './styles.module.css';
import { Button, TextField } from '@mui/material';
import useAuth from '@Services/useAuth';
import { useState } from 'react';
import { LoginResponse } from '@Types/User';
import { Warning, WarningCircle } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [pwd, setPwd] = useState<string>('');
  const [error, setError] = useState<{
    message: string;
    code: LoginResponse['code'];
    errors: LoginResponse['errors'];
  } | null>(null);

  const handleSubmit = async () => {
    const response = await login(email, pwd);
    if (!response.success)
      setError({
        message: response.message,
        errors: response.errors,
        code: response.code,
      });
    else navigate('/');
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
              error={Boolean(error?.errors?.email)}
              helperText={
                error?.errors?.email && error.code === 'VALIDATION_ERROR' ? (
                  <p style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <WarningCircle size={12} />
                    {error?.errors.email}
                  </p>
                ) : (
                  ''
                )
              }
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
              helperText={
                error?.errors?.password && error.code === 'VALIDATION_ERROR' ? (
                  <p style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <WarningCircle size={12} />
                    {error?.errors.password}
                  </p>
                ) : (
                  ''
                )
              }
              style={{ width: '100%' }}
              error={Boolean(error?.errors?.password)}
              type="password"
              label="Password"
              name="password"
              required
            />
            {error && (
              <span>
                <Warning size={16} />
                {error.message}
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
