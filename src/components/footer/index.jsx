import {AppBar, Box, Typography} from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{padding: '0.5%', textAlign: 'center'}}>
          <Typography variant="h6" color="inherit" component="div">
            ©2023 Ryosuke Saiki
          </Typography>
      </AppBar>
    </Box>
  );
}