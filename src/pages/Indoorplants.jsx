import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import SpeciesPlants from '../components/SpeciesPlants/SpeciesPlants';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function Indoorplants({ data }) {
  const [selectedSpecies, setSelectedSpecies] = useState(null);
  const uniqueSpecies = new Set(data.map(item => item.species));
  const currentSpecies = data.filter(item => item.species === selectedSpecies);

  const [openSpecies, setOpenSpecies] = useState(null);
  const [open, setOpen] = React.useState(true);

  const handleItemClick = species => {
    setSelectedSpecies(species);
    setOpenSpecies(prevOpen => (prevOpen === species ? null : species));
    setOpen(!open);
  };

  return (
    <>
      <Header />
      <List>
        {Array.from(uniqueSpecies).map(species => (
          <ListItem key={species} sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => handleItemClick(species)}
              component={Link}
              to={open ? '/indoor/species' : '/indoor/'}
            >
              <ListItemText primary={species} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse
              in={openSpecies === species}
              timeout="auto"
              unmountOnExit
              style={{
                width: '100%',
              }}
            >
              <SpeciesPlants data={currentSpecies} />
            </Collapse>
          </ListItem>
        ))}
      </List>
    </>
  );
}
