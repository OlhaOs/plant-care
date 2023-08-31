import './App.css';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

import {ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';

import theme from './theme'

import Home from './pages/Home';
import IndoorPlants from './pages/Indoorplants';
import OutdoorPlants from './pages/Outdoorplants';
import SpeciesPlants from './components/SpeciesPlants/SpeciesPlants';
import PlantDetails from './components/PlantDetails/PlantDetails';
// import Care from './components/Care';
// import Desease from './components/Desease';

function App() {
  const [data, setData] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'plants'));
      const dataBase = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(dataBase);
    };

    fetchData();
  }, []);

 
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" 
      sx={{
          backgroundImage: "url('./images/bg-body.webp')",
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          backgroundSize: 'cover',
          minHeight: '100vh',
          padding: '1rem', 
        }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/indoor" element={<IndoorPlants data={data.length > 0 ? data : []} />}>
            <Route path="/indoor/species" element={<SpeciesPlants />} />
          </Route>
          <Route
            path="/indoor/species/:plantId"
            element={<PlantDetails data={data} />}
          />
          {/*  <Route path</Route>="care" element={<Care />} />
            <Route path="deseases" element={<Desease />} />
           */}

          <Route path="/outdoor/" element={<OutdoorPlants />} />
          <Route path="/outdoor/species" element={<SpeciesPlants />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
