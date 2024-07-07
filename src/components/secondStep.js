import * as React from 'react';
import Box, { boxClasses } from '@mui/material/Box';
import { Card, FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import AddCardIcon from '@mui/icons-material/AddCard';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

export default function SecondStep ({ handleNextStep }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiration, setExpiration] = useState('');
    const [cvv, setCvv] = useState('');
  
    const handleFirstNameChange = (event) => {
      setFirstName(event.target.value);
    };
    
    const handleLastNameChange = (event) => {
      setLastName(event.target.value);
    };
    
    const handleCardNumberChange = (event) => {
      setCardNumber(event.target.value);
    };
    
    const handleCvvChange = (event) => {
      setCvv(event.target.value);
    };
    
    const handleExpirationChange = (event) => {
      setExpiration(event.target.value);
    };
    
    const handleNext = () => {
      const data = {
        firstName: firstName?.trim(), // Access and trim firstName if it exists
        lastName: lastName?.trim(),
        cardNumber: cardNumber?.trim(),
        cvv: cvv?.trim(),
        expiration: expiration?.trim()
      };
      handleNextStep(data);
    };
    
    return (
        <Card sx={{ width: '100%', maxWidth: 600, padding: 3, bgcolor: 'background.paper' }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Información de Pago
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Nombres" id="outlined-controlled" onChange={handleFirstNameChange}/>
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Apellidos" id="outlined-controlled" sx={{ mt: 1 }} onChange={handleLastNameChange}/>
              </Grid>
              
              <Grid item xs={12}>
              <Divider sx={{ mb: 3}} />
                <TextField
                  fullWidth
                  label="Nro de Tarjeta"
                  id="input-with-icon-textfield"
                  onChange={handleCardNumberChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AddCardIcon />
                      </InputAdornment>
                    ),
                  }}
                  placeholder="4557 - 123 - 123 - 125"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="CVV" id="outlined-controlled" placeholder="123" variant="standard" onChange={handleCvvChange}/>
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Vencimiento" id="outlined-controlled" placeholder="08/26" variant="standard" onChange={handleExpirationChange}/>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Recordar Tarjeta" />
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" onClick={handleNext} sx={{ mt: 2 }}>
              Continuar
            </Button>
          </CardContent>
        </Card>
      );
}