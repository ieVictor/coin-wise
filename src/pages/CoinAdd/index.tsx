import Footer from '@Components/Footer';
import {
  Button,
  Container,
  FormControl,
  InputAdornment,
  TextField,
} from '@mui/material';
import styles from './styles.module.css';
import { addCrypto } from '@Services/useCrypto';
import {
  Cryptocurrency_Add_Inputs,
  Cryptocurrency_Add_Response,
} from '@Types/Cryptocurrency';
import { useState } from 'react';
import useAuth from '@Services/useAuth';
import { useNavigate } from 'react-router-dom';

export default function CoinAdd() {
  const { accessToken } = useAuth();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Cryptocurrency_Add_Response['errors']>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;

    // Remove apenas o erro do campo alterado
    if (errors?.[name as keyof Cryptocurrency_Add_Inputs]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined, // Define o erro como undefined (ou null, dependendo da necessidade)
      }));
    }
  };

  const getFormData = (formId: string) => {
    const form = document.getElementById(formId);
    if (!form) {
      console.error(`Formulário com id "${formId}" não encontrado.`);
      return {};
    }

    const formData: Record<string, string | number | null> = {};
    const inputs = form.querySelectorAll<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >('input, select, textarea');

    inputs.forEach((input) => {
      if (input.name) {
        formData[input.name] = Number(input.value) || input.value || null;
      }
    });

    return formData;
  };

  const onSubmit = async () => {
    const data = getFormData('coin-form');
    const response = await addCrypto(
      data as Cryptocurrency_Add_Inputs,
      accessToken
    );
    if (!response.success) return setErrors(response.errors);
    navigate('/');
  };

  return (
    <>
      <Container className={styles.mainWrapper}>
        <h1>Add a new coin!</h1>
        <FormControl id={'coin-form'} style={{ width: '100%' }}>
          <div className={styles.sectionWrapper}>
            <h3>Coin informations</h3>
            <div className={styles.doubleInputLine}>
              <TextField
                name="symbol"
                onChange={handleChange}
                error={Boolean(errors?.symbol)}
                helperText={errors?.symbol}
                style={{ width: '100%' }}
                size="small"
                type="text"
                label={'Coin Symbol'}
                placeholder="XXX"
                required
              />
              <TextField
                name="name"
                onChange={handleChange}
                error={Boolean(errors?.name)}
                helperText={errors?.name}
                style={{ width: '100%' }}
                size="small"
                type="text"
                label={'Coin Name'}
                placeholder="Coin Name"
                required
              />
            </div>
            <TextField
              name="image"
              onChange={handleChange}
              style={{ width: '100%' }}
              size="small"
              type="text"
              error={Boolean(errors?.image)}
              helperText={errors?.image}
              label={'Image URL'}
              placeholder="https://example.com/btc.png"
              required
            />
          </div>
          <div className={styles.sectionWrapper}>
            <h3>Market informations</h3>
            <div className={styles.doubleInputLine}>
              <TextField
                name="current_price"
                onChange={handleChange}
                error={Boolean(errors?.current_price)}
                helperText={errors?.current_price}
                style={{ width: '100%' }}
                size="small"
                type="number"
                label={'Current Price'}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">USD</InputAdornment>
                    ),
                  },
                }}
                placeholder="12.309"
                required
              />
              <TextField
                name="market_cap"
                onChange={handleChange}
                style={{ width: '100%' }}
                error={Boolean(errors?.market_cap)}
                helperText={errors?.market_cap}
                size="small"
                type="number"
                label={'Market Cap'}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">USD</InputAdornment>
                    ),
                  },
                }}
                placeholder="800.000.000.000"
                required
              />
            </div>
            <div className={styles.doubleInputLine}>
              <TextField
                name={'market_cap_rank'}
                onChange={handleChange}
                error={Boolean(errors?.market_cap_rank)}
                helperText={errors?.market_cap_rank}
                style={{ width: '100%' }}
                size="small"
                type="number"
                label={'Market Cap Ranking'}
                placeholder="1"
                required
              />
              <TextField
                name={'total_volume'}
                onChange={handleChange}
                style={{ width: '100%' }}
                error={Boolean(errors?.total_volume)}
                helperText={errors?.total_volume}
                size="small"
                type="number"
                label={'Total Volume'}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">USD</InputAdornment>
                    ),
                  },
                }}
                placeholder="43.000.000"
                required
              />
            </div>
            <div className={styles.doubleInputLine}>
              <TextField
                name="high_24h"
                onChange={handleChange}
                style={{ width: '100%' }}
                error={Boolean(errors?.high_24h)}
                helperText={errors?.high_24h}
                size="small"
                type="number"
                label={'High 24h'}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">USD</InputAdornment>
                    ),
                  },
                }}
                placeholder="12.200"
                required
              />
              <TextField
                name="low_24h"
                onChange={handleChange}
                style={{ width: '100%' }}
                error={Boolean(errors?.low_24h)}
                helperText={errors?.low_24h}
                size="small"
                type="number"
                label={'Low 24h'}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">USD</InputAdornment>
                    ),
                  },
                }}
                placeholder="11.900"
                required
              />
            </div>
            <div className={styles.doubleInputLine}>
              <TextField
                name="circulating_supply"
                onChange={handleChange}
                style={{ width: '100%' }}
                error={Boolean(errors?.circulating_supply)}
                helperText={errors?.circulating_supply}
                size="small"
                type="number"
                label={'Circulating supply'}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">USD</InputAdornment>
                    ),
                  },
                }}
                placeholder="12.200"
                required
              />
              <TextField
                name="total_supply"
                onChange={handleChange}
                style={{ width: '100%' }}
                error={Boolean(errors?.total_supply)}
                helperText={errors?.total_supply}
                size="small"
                type="number"
                label={'Total supply'}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">USD</InputAdornment>
                    ),
                  },
                }}
                placeholder="11.900"
                required
              />
            </div>
            <TextField
              name="max_supply"
              onChange={handleChange}
              style={{ width: '100%' }}
              error={Boolean(errors?.max_supply)}
              helperText={errors?.max_supply}
              size="small"
              type="number"
              label={'Max supply'}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">USD</InputAdornment>
                  ),
                },
              }}
              placeholder="21.000.000"
              required
            />
            <div className={styles.doubleInputLine}>
              <TextField
                name="ath"
                onChange={handleChange}
                style={{ width: '100%' }}
                error={Boolean(errors?.ath)}
                helperText={errors?.ath}
                size="small"
                type="number"
                label={'All Time High'}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">USD</InputAdornment>
                    ),
                  },
                }}
                placeholder="69.000"
                required
              />
              <TextField
                name="atl"
                onChange={handleChange}
                style={{ width: '100%' }}
                error={Boolean(errors?.atl)}
                helperText={errors?.atl}
                size="small"
                type="number"
                label={'All Time Low'}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">USD</InputAdornment>
                    ),
                  },
                }}
                placeholder="1.00"
                required
              />
            </div>
          </div>
          <Button
            onClick={onSubmit}
            style={{ marginTop: 32 }}
            color="primary"
            variant="contained"
          >
            Add new coin
          </Button>
        </FormControl>
      </Container>
      <Footer />
    </>
  );
}
