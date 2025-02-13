import { TextField, InputAdornment } from '@mui/material';
import { MagnifyingGlass } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchField() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (/\d/.test(value)) {
      setError(true);
      setHelperText('Only text allowed.');
    } else {
      setError(false);
      setHelperText('');
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!error && search.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(search.trim())}`);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="search"
        size="small"
        variant="outlined"
        type="search"
        placeholder="Search Coins..."
        value={search}
        onChange={handleChange}
        error={error}
        helperText={helperText}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <MagnifyingGlass fontSize="small" />
              </InputAdornment>
            ),
          },
        }}
      />
    </form>
  );
}

export default SearchField;
