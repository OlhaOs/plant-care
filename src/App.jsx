import * as React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import { green } from '@mui/material/colors';
import Home from './pages/Home';
import IndoorPlants from './pages/Indoorplants';
import OutdoorPlants from './pages/Outdoorplants';
import SpeciesPlants from './components/SpeciesPlants/SpeciesPlants';
// import PlantDetails from './components/PlantDetails';
// import Care from './components/Care';
// import Desease from './components/Desease';

function App() {
  const theme = createTheme({
    palette: {
      // mode: 'dark',
      primary: {
        main: green[300],
      },
      secondary: {
        main: '#000',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/indoor" element={<IndoorPlants />} />
          <Route path="/indoor/species" element={<SpeciesPlants />} />
          {/* <Route path="/Indoor/species/:plantId" element={<PlantDetails />}>
            <Route path="care" element={<Care />} />
            <Route path="deseases" element={<Desease />} />
          </Route> */}
          <Route path="/outdoor/" element={<OutdoorPlants />} />
          <Route path="/outdoor/species" element={<SpeciesPlants />} />
          {/* <Route path="/Outdoor/species/:plantId" element={<PlantDetails />}>
            <Route path="care" element={<Care />} />
            <Route path="deseases" element={<Desease />} />
          </Route> */}
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
