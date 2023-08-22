import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from './Header.styled';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import { Button } from '@mui/material';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState(null);
  const handleSearch = e => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/" color="secondary" sx={{ mr: 2 }}>
            <LocalFloristOutlinedIcon fontSize="large" />
          </Button>

          <Typography
            variant="h6"
            noWrap
            component="div"
            color="secondary"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Button component={Link} to="/indoor" color="secondary">
              Кімнатні рослини
            </Button>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Button component={Link} to="/outdoor" color="secondary">
              Вуличні рослини
            </Button>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={e => {
                handleSearch(e);
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
