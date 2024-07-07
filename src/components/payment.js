import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FirstStep from './firststep';
import SecondStep from './secondStep';
import LastStep from './lastStep';
import { useState } from 'react';


const steps = [
  {
    label: 'Ingresar Apuesta',
  },
  {
    label: 'Ingresar Datos Bancarios',
  },
  {
    label: 'Revisar Datos',
  },
];

export default function Payment({ match}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData]  = useState({
    amount: '',
    team: '',
    winningAmount: '',
    firstName: '',
    lastName: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  });

  const handleNextStep = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleLastStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFormData({});
  };
  const handleSubmitForm = () => {
    // Example: Submit formData to API or dispatch action
    alert('Form submitted:', formData);
    // Reset form data after submission (if needed)
    setFormData({
      amount: '',
      team: '',
      winningAmount: '',
      firstName: '',
      lastName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
      
    });
  };
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <FirstStep match={match} handleNextStep={handleNextStep} />;
      case 1:
        return <SecondStep handleNextStep={handleNextStep} />;
      case 2:
        return <LastStep formData={formData} handleSubmit={handleSubmitForm}  handleLastStep={handleLastStep}/>;
      default:
        return 'Paso?';
    }
  };

  return (
    <Box sx={{ maxWidth: 450 , margin: 5, alignContent: 'center'}}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Último Paso</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {getStepContent(index)}
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Volver
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Gracias por Apostar. Mucha Suerte. </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}