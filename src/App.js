import React from 'react';
import Grid from './components/Grid';
import StyledButton from './components/StyledButton ';
function App() {
  return (
    <Grid>
      <StyledButton variant="default">Default</StyledButton>
      <StyledButton variant="success">Success</StyledButton>
      <StyledButton variant="error">Error</StyledButton>
      <StyledButton variant="warning">Warning</StyledButton>
      <StyledButton variant="info">Info</StyledButton>
    </Grid>
  );
}

export default App;