import React, { useState} from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
 
  Button,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import { styled } from '@mui/system';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleIcon from '@mui/icons-material/People';
import axios from 'axios';
const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '2rem',
      color: '#2C3E50',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  palette: {
    primary: {
      main: '#3498DB',
    },
    secondary: {
      main: '#E74C3C',
    },
    background: {
      default: '#ECF0F1',
    },
  },
  shape: {
    borderRadius: 12,
  },
});

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  background: '#FFFFFF',
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 200,
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
  },
  '& .MuiInputLabel-root': {
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
}));

const StyledSearchBar = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
  },
  '& .MuiInputAdornment-root': {
    marginRight: theme.spacing(1),
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1, 3),
  fontWeight: 600,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
}));

const BoardingPlacesFinder = ({pageVal,getData}) => {
 // const [places, setPlaces] = useState([]);
  /*const [filters, setFilters] = useState({ price: '', distance: '', capacity: '' });*/
 /* const [searchQuery, setSearchQuery] = useState('');*/

 /* useEffect(() => {
    fetchPlaces();
  }, []);*/

 // const fetchPlaces = async (searchQuery = '', filters = {}) => {
  //  const response = await fetch(`/api/places?search=${searchQuery}&${new URLSearchParams(filters)}`);
   // const data = await response.json();
   // setPlaces(data);
 // };



  /*const handleFilterChange = (newFilters) => {
   /* setFilters(newFilters);*/
    /*fetchPlaces(searchQuery, newFilters);*/
 /* };*/



  const[size,setSize] = useState(12);
  const[nearestCity,setNearestCity] = useState("");
  const[minPrice,setMinPrice] = useState(0);
  const[maxPrice,setMaxPrice] = useState(0);
  const[minDistance,setMinDistance] = useState(0);
  const[maxDistance,setMaxDistance] = useState(0);
  const[capacity,setCapacity] = useState(0);
  
  const handleSearch = async (e) => {
    e.preventDefault();
    setSize(10);
    try {
      // Construct the request URL
      const response = await axios.get(
        `http://localhost:8090/api/v1/bodimeDetails/filter?page=${pageVal}&size=${size}&nearestCity=${nearestCity}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDistance=${minDistance}&maxDistance=${maxDistance}&capacity=${capacity}`
      );

      // Display the response data in the console
      console.log('Response Data:', response.data);
      getData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StyledContainer maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Discover The Perfect Apartment For You
        </Typography>
        <StyledPaper>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <form onSubmit={handleSearch}>
                <StyledSearchBar
                  fullWidth
                  variant="outlined"
                  placeholder="Search by location name..."
                  
                  onChange={(e) => setNearestCity(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <StyledButton type="submit" variant="contained" color="primary">
                          Search
                        </StyledButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </form>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <StyledFormControl fullWidth variant="outlined">
                    <InputLabel>Price</InputLabel>
                    <Select
                      
                      onChange={(e) =>{
                        if(e.target.value === "5000-"){
                          setMinPrice(0);
                          setMaxPrice(5000);
                        }
                        else if(e.target.value === "5000-10000"){
                          setMinPrice(5000);
                          setMaxPrice(10000);
                        }
                        else if(e.target.value === "10000-20000"){
                          setMinPrice(10000);
                          setMaxPrice(20000);
                        }
                        else if(e.target.value === "20000-30000"){
                          setMinPrice(20000);
                          setMaxPrice(30000);
                        }
                        else if(e.target.value === "30000+"){
                          setMinPrice(30000);
                          setMaxPrice(100000);
                        }
                      }} 
                      label="Price"
                      startAdornment={
                        <InputAdornment position="start">
                          <AttachMoneyIcon />
                        </InputAdornment>
                      }
                    >
                      <MenuItem value="" selected>All</MenuItem>
                      <MenuItem value="5000-">Below Rs.5000</MenuItem>
                      <MenuItem value="5000-10000">Rs.5000 - Rs.10000</MenuItem>
                      <MenuItem value="10000-20000">Rs.10000 - Rs.20000</MenuItem>
                      <MenuItem value="20000-30000">Rs.20000 - Rs.30000</MenuItem>
                      <MenuItem value="30000+">Above Rs.30000</MenuItem>
                    </Select>
                  </StyledFormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <StyledFormControl fullWidth variant="outlined">
                    <InputLabel>Distance to University</InputLabel>
                    <Select
                      
                      onChange={(e) => {
                        if(e.target.value === "0-1"){
                          setMinDistance(0);
                          setMaxDistance(1);
                        }
                        else if(e.target.value === "1-3"){
                          setMinDistance(1);
                          setMaxDistance(3);
                        }
                        else if(e.target.value === "3-5"){
                          setMinDistance(3);
                          setMaxDistance(5);
                        }
                        else if(e.target.value === "5+"){
                          setMinDistance(5);
                          setMaxDistance(100);
                        }
                      }}
                      label="Distance to University"
                      startAdornment={
                        <InputAdornment position="start">
                          <LocationOnIcon />
                        </InputAdornment>
                      }
                    >
                      <MenuItem value="" selected>All</MenuItem>
                      <MenuItem value="0-1">Below 1km</MenuItem>
                      <MenuItem value="1-3">1 km - 3 km</MenuItem>
                      <MenuItem value="3-5">3 km - 5 km</MenuItem>
                      <MenuItem value="5+">Above 5 km</MenuItem>
                    </Select>
                  </StyledFormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <StyledFormControl fullWidth variant="outlined">
                    <InputLabel>Bodim Capacity</InputLabel>
                    <Select
                     
                      onChange={(e) =>
                      {
                        if(e.target.value === "1"){
                          setCapacity(1);
                          
                        }
                        else if(e.target.value === "2"){
                          setCapacity(2);
                          
                        }
                        else if(e.target.value === "3+"){
                          setCapacity(3);
                          
                        }
                      }}
                      label="Bodim Capacity"
                      startAdornment={
                        <InputAdornment position="start">
                          <PeopleIcon />
                        </InputAdornment>
                      }
                    >
                      <MenuItem value="" selected>All</MenuItem>
                      <MenuItem value="1">Single</MenuItem>
                      <MenuItem value="2">Double</MenuItem>
                      <MenuItem value="3+">3+ People</MenuItem>
                    </Select>
                  </StyledFormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
        </StyledPaper>
        <div style={{
          paddingLeft:'10px',
          paddingRight:'10px',
        width:'100%',
        height:'auto',
        display:'grid',
        rowGap:'30px',
        colomnGap:'0px',
        justifyContent:'center',
        gridTemplateColumns: 'repeat(3, 1fr)'
        
        
      }}>
          
         
    
      </div>
        {/* <Grid container spacing={3}>
          {places.map((place) => (
            <Grid item xs={12} sm={6} md={4} key={place.id}>
              <Card
                elevation={3}
                sx={{
                  borderRadius: theme.shape.borderRadius,
                  height: '100%',
                  backgroundColor: '#fdfdfd',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={place.image}
                  alt={place.name}
                  sx={{
                    borderTopLeftRadius: theme.shape.borderRadius,
                    borderTopRightRadius: theme.shape.borderRadius,
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {place.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: Rs. {place.price}/month
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Distance: {place.distance} km from university
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Capacity: {place.capacity} {place.capacity === 1 ? 'person' : 'people'}
                  </Typography>
                  <Button size="small" color="primary" sx={{ mt: 2 }}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        */}
      </StyledContainer>
      
    </ThemeProvider>
  );
};

export default BoardingPlacesFinder;