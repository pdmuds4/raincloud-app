import {AppBar, Box, Typography} from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{padding: '1%', textAlign: 'center'}}>
          <Typography variant="h4" color="inherit" component="div">
            雨雲レーダー天候予測AI
          </Typography>
      </AppBar>
    </Box>
  );
}