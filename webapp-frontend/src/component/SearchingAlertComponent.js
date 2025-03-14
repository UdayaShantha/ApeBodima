import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Button, Container, Grid, Typography } from '@mui/material';
import SearchingImg from './images/Searching.svg';
import { Link } from 'react-router-dom';

//TODO work on responsivness of the layout
const SearchingAlertComponent=()=>{
    return(
            <Container maxWidth="xl" sx={{bgcolor: '#F4F4F4', margin:0, paddingTop:'3vh', px: { xs: '60px' ,lg : '100px' }}} disableGutters>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md sx={{textAlign:{xs:'center',sm:'left'}}}>
                        <Typography variant="h4" className='playfair-display-header home' sx={{fontSize:"4rem"}}>
                            Find Your Perfect Apartment In here
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md sx={{paddingTop:'5vh',textAlign:{xs:'center',sm:'left'}}}>
                        <Typography sx={{fontSize:'1.1em'}}>
                            Discover affordable apartments  for university students
                        </Typography>
                        <Grid item container rowGap={5}>
                                <Grid item xs>
                                    <Link to="/addBodim">
                                    <Button variant="contained" color='primary' startIcon={<SearchOutlinedIcon />} >
                                        Search
                                    </Button>
                                    </Link>
                                </Grid>
                                <Grid item xs>
                                    <Link to="/a/terms-policies-section">
                                    <Button variant="outlined">
                                        Learn more
                                    </Button>
                                    </Link>
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md sx={{textAlign:'center'}}>
                        <img src={SearchingImg} alt='searching'/>
                    </Grid>
                </Grid>
            </Container>
    )
}

export default SearchingAlertComponent;