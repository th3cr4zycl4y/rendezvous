import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `20px`,
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.5),
  padding: '12px 24px',
  maxWidth: '1312px',
  width: '95%',
  margin: '0 auto',
  boxSizing: 'border-box',
}));




export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 6 }}
    >
      <Container maxWidth={false} disableGutters >
        <StyledToolbar variant="dense" >
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h3 className='logo'>rendezvous</h3>
            </div>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="info" className='menu-button'>
                Discover
              </Button>
              <Button variant="text" color="info" className='menu-button'>
                About us
              </Button>
              <Button variant="text" color="info" className='menu-button'>
                FAQS
              </Button>
              <Button variant="text" color="info" className='menu-button'>
                Contact us
              </Button>

            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 1,
                alignItems: 'center',
              }}
            >
              <Button color="info" variant="text" size="small" className='menu-button'>
                Log in
              </Button>
              <Button color="primary" variant="contained" size="small" sx={{ textTransform: 'none', fontWeight: "bold", fontSize: 16, px: 4, py: 1 }}>
                Sign up
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem>Discover</MenuItem>
                <MenuItem>About us</MenuItem>
                <MenuItem>FAQs</MenuItem>
                <MenuItem>Contact us</MenuItem>

                <MenuItem>
                  <Button color="info" variant="contained" fullWidth>
                    Login
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign Up
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
