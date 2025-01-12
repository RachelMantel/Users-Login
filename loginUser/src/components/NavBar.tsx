import { Link } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ width: '100%' ,backgroundColor: 'gray',zIndex:20}}> 
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button color="inherit">
              <Link to='/home' style={{ color: 'inherit', textDecoration: 'none',fontSize:'20px' ,margin:'20px'}}>Home</Link>
            </Button>
            <Button color="inherit">
              <Link to='/about' style={{ color: 'inherit', textDecoration: 'none',fontSize:'20px' ,margin:'20px' }}>About</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
