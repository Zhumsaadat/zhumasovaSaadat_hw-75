import React, { useState } from 'react';
import { TextField, Button, Stack } from '@mui/material';
import axiosApi from './axiosApi';

function App() {
  const [encode, setEncode] = useState('');
  const [decode, setDecode] = useState('');

  const handleEncode = async () => {
    if (!encode) return;
    try {
      const response = await axiosApi.post('/encode', decode );
        setEncode(response.data);
    } catch (error) {
      console.error('Error encoding:', error);
    }
  };

  const handleDecode = async () => {
    if (!decode) return;
    try {
      const response = await axiosApi.post('/decode', encode);
      setEncode(response.data);
    } catch (error) {
      console.error('Error decoding:', error);
    }
  };

  return (
    <Stack spacing={2} sx={{ maxWidth: '400px', margin: 'auto', paddingTop: '50px' }}>
      <TextField
        label="Encode"
        variant="outlined"
        value={encode}
        onChange={(e) => setEncode(e.target.value)}
      />
      <TextField
        label="Decode"
        variant="outlined"
        value={decode}
        onChange={(e) => setDecode(e.target.value)}
      />
      <Button onClick={handleEncode} variant="contained">
        Encode
      </Button>
      <Button onClick={handleDecode} variant="contained">
        Decode
      </Button>
    </Stack>
  );
}

export default App;









