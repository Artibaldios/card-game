import React from 'react';
import './App.css';
import Grid from './components/Grid/Grid';
import MobileGrid from './components/MobileGrid/MobileGrid';
import { useMediaQuery } from 'react-responsive';

const App: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 991});
  return (
    isMobile ? <MobileGrid/>:
      <Grid />
  );
};

export default App;