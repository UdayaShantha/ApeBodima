import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const FavoriteItem = ({ bodim, onRemove }) => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      bgcolor: 'white',
      borderRadius: '10px',
      p: { xs: 1, sm: 2 },
      mb: 1,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      flexDirection: isXsScreen ? 'column' : 'row',
    }}>
      <Box
        component="img"
        sx={{
          width: { xs: 100, sm: 60 },
          height: { xs: 100, sm: 60 },
          borderRadius: '10px',
          mr: { xs: 0, sm: 2 },
          mb: { xs: 1, sm: 0 }
        }}
        src={bodim.mainPhotoUrl || 'default-image-url.jpg'}
        alt={bodim.bodimName}
      />
      <Box sx={{ flexGrow: 1, width: isXsScreen ? '100%' : 'auto' }}>
        <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold', textAlign: isXsScreen ? 'center' : 'left' }}>
          {bodim.bodimName}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5, justifyContent: isXsScreen ? 'center' : 'flex-start', flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 1 }}>
            <LocationOnIcon sx={{ fontSize: 16, color: 'green', mr: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              {bodim.location}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <AttachMoneyIcon sx={{ fontSize: 16, color: 'green', mr: 0.5 }} />
            <Typography variant="body2" color="text.secondary">
              {bodim.price}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Button
        variant="text"
        color="error"
        onClick={() => onRemove(bodim.bodimId)}
        sx={{ minWidth: 'auto', mt: isXsScreen ? 1 : 0 }}
      >
        Remove
      </Button>
    </Box>
  );
};

export default FavoriteItem;