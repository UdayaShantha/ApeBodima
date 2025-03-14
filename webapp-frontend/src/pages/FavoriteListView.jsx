import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Modal, IconButton, useTheme, useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteItem from '../component/FavoriteItem';

const FavoriteListView = ({ open, handleClose }) => {
  const [favorites, setFavorites] = useState([]);
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (open) {
      fetchFavorites();
    }
  }, [open]);

  const fetchFavorites = async () => {
    try {
      const userNIC = '200124601441'; // Replace with actual user NIC
      const response = await axios.get(`http://localhost:8090/api/v1/favourite/user/${userNIC}`);
      setFavorites(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching favorites:', error);
    }
  };

  const handleRemove = async (bodimId) => {
    try {
      await axios.delete(`http://localhost:8090/api/v1/favourite/delete/${bodimId}`);
      console.log(bodimId);
      setFavorites(favorites.filter(fav => fav.bodimId !== bodimId));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isXsScreen ? '95%' : '90%',
    maxWidth: 500,
    bgcolor: '#f0f0ff',
    borderRadius: '20px',
    boxShadow: 24,
    p: isXsScreen ? 2 : 4,
    maxHeight: '90vh',
    overflowY: 'auto',
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="favorite-list-modal"
      aria-describedby="list-of-favorite-apartments"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: isXsScreen ? 4 : 8,
            top: isXsScreen ? 4 : 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography id="favorite-list-modal" variant={isXsScreen ? "h6" : "h5"} component="h2" sx={{ mb: 1, fontWeight: 'bold' }}>
          Your Favorite Apartment List
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          You can remove an apartment from this list
        </Typography>
        <Box sx={{ mt: 2 }}>
          {favorites.map((bodim) => (
            <FavoriteItem key={bodim.bodimId} bodim={bodim} onRemove={handleRemove} />
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default FavoriteListView;