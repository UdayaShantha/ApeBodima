import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import '../component/css/Home.css'

export default function ActionAreaCard({ image, title, desc }) {
  const handleClick = () => {
    
  };
  return (
    <Card sx={{ width:'25%',
      marginLeft:'5%'
     }} className='card' onClick={handleClick} >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{ height: '100%', objectFit: 'cover' }} 
          image={image}
          alt="green iguana"
        />
        <CardContent sx={{height:'100%'}}>
          <Typography className='title' gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography className='desc' variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}