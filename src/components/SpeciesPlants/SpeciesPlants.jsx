import * as React from 'react';

import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function SpeciesPlants({ data }) {
  return (
    <>
      <List>
        {data.map(item => (
          <ListItem key={item.id}>
            <ListItemButton component={Link} to={`/indoor/species/${item.id}`}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
