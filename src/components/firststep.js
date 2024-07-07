import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function FirstStep({ match , handleNextStep }) {
    const [amount, setAmount] = useState('');
    const [team, setTeam] = useState('');
    const [winningAmount, setWinningAmount] = useState(0);
    function winingmoney(team, amount) {
        if (!team || !amount) {
          return amount; // Return original amount if no selection
        }
      
        if (!match[0]) { // Check if match is defined
          return 0; // Or throw an error or display a message
        }

        const teamIndex = match[0].teams?.indexOf(team) ?? -1;
        if (teamIndex !== -1) {
          return amount * match[0].weight[teamIndex];
        }
      
        // Handle invalid team selection (optional)
        alert("Invalid Team Selection", team);
        return 0; // Or throw an error or display a message
      }
    const handleAmountChange = (event) => {
    const amountValue = event.target.value;
      setAmount(event.target.value);
      const amountNumber = parseFloat(amountValue); // Convert amount to number
      const calculatedAmount = winingmoney(team, amountNumber);
      setWinningAmount(calculatedAmount); // Update winning amount state
    };
  
    const handleTeamChange = (event) => {
        const teamValue = event.target.value;
        setTeam(event.target.value);
        const amountNumber = parseFloat(amount); // Convert amount to number
        const calculatedAmount = winingmoney(teamValue, amountNumber);
        setWinningAmount(calculatedAmount); // Update winning amount state
    };
    
    const handleNext = () => {
      const data = {
        amount,
        team,
        winningAmount,
      };
      handleNextStep(data); // Pass data to the parent component
    };
  
  return (
    <Card variant="outlined" sx={{ width: '100%', maxWidth: 600, padding: 3 }}>
      <Box>
        <Stack direction="column" spacing={2}>
          <Typography gutterBottom variant="h5" component="div" flex-left>
            Partido
          </Typography>
          {match.map((matchItem, index) => (
            <Box key={index}>
              <Typography variant="h6">{matchItem.teams[0] } VS {matchItem.teams[1] }</Typography>
              <Divider sx={{ my: 1 }} />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body1">{matchItem.teams[0] }</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{matchItem.weight[0]}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{matchItem.teams[1]}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1">{matchItem.weight[1]}</Typography>
                </Grid>
              </Grid>
                <Typography color="text.secondary" variant="body2" sx={{paddingTop: 5}}>
                ¿Cual es su apuesta? En Soles S/.
            </Typography>
            <FormControl sx={{ m: 1 }} variant="standard" fullWidth>
                <TextField
                id="demo-customized-textbox"
                label="Apuesta"
                variant="standard"
                value={amount}
                onChange={handleAmountChange}
                />
            </FormControl>
                <FormControl sx={{ m: 1 }} variant="standard" fullWidth>
                <InputLabel id="demo-customized-select-label">Seleccionar Equipo</InputLabel>
                <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={team}
                onChange={handleTeamChange}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={matchItem.teams[0]}>{matchItem.teams[0]}</MenuItem>
                <MenuItem value={matchItem.teams[1]}>{matchItem.teams[1]}</MenuItem>
                </Select>
            </FormControl>
            <Divider sx={{ my: 1 }} />
            <Typography color="text.secondary" variant="body2" sx={{paddingTop: 5}}>
                Uds Ganara S/. {winningAmount} con su apuesta.
            </Typography>
            </Box>
            
          ))}
          <Button variant="contained" color="primary" onClick={handleNext} sx={{ mt: 2 }}>
            Continue
          </Button>

          
        </Stack>
      </Box>
    </Card>
  );
}
