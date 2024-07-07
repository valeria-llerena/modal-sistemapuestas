import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

export default function LastStep  ({ formData, handleSubmit , handleLastStep}) {
  const { amount, team, winningAmount, firstName, lastName, cardNumber, expiration, cvv } = formData;

  // Function to calculate total payment including taxes
  const totalpay = (money) => {
    const amountNumber = parseFloat(money);
    return (amountNumber * 0.18) + amountNumber;
  };

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    handleSubmit(); // Call handleSubmit function passed from parent
    handleLastStep(); 
  };

  return (
    <Card variant="outlined" style={{ width: '100%', maxWidth: 800, margin: 'auto', marginTop: 20, padding: 20 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>Revisa Tus Datos</Typography>
        <Divider />

        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1"><strong>Personal</strong></Typography>
            <Typography><strong>Nombres:</strong> {firstName}</Typography>
            <Typography><strong>Apellidos:</strong> {lastName}</Typography>
            <Typography><strong>Tarjeta:</strong> {cardNumber}</Typography>
            <Typography><strong>Expiracion:</strong> {expiration}</Typography>
            <Typography><strong>CVV:</strong> {cvv}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1"><strong>Apuesta</strong></Typography>
            <Typography><strong>Equipo:</strong> {team}</Typography>
            <Typography><strong>Apuesta:</strong> {amount}</Typography>
            <Typography><strong>IGV (18%):</strong> {(amount * 0.18).toFixed(2)}</Typography>
            <Typography><strong>Total :</strong> {totalpay(amount).toFixed(2)}</Typography>
            <Typography><strong>Ganancias:</strong> {winningAmount}</Typography>
          </Grid>
        </Grid>

        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Button variant="contained" color="primary" onClick={onSubmit}>PAGAR</Button>
        </div>
      </CardContent>
    </Card>
  );
};

