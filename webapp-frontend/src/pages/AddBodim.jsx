import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import DeleteIcon from '@mui/icons-material/Delete';
import FeedbackIcon from '@mui/icons-material/Feedback';
import {
    Box,
    Button,
    Container,
    Divider, FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    IconButton,
    MenuItem,
    Paper,
    Radio, RadioGroup,
    Select,
    TextField,
    Typography
} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { React, useEffect, useState } from 'react';
import { fetchBodimTypes ,postBodimDetails} from '../apiConfig/apiService';
import ReviewCardComponent from '../component/ReviewCardComponent';
import Popups from './Popup';
import ReviewAddingForm from './ReviewAddingForm';
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer';
import "./css/AddBodim.css"


const AddBodim = () => {
    const sectionContainerStyle={
        borderRadius:'8px',
        boxShadow: 4,
        backgroundColor:'#FFFFFF',
        paddingTop:'5px', 
        my: 4, 
        padding: '16px'
    }
    const sectionTtileStyle={
        color:'#4A90E2'
    }
    
    //Form styling
    const boxStyle={
        display: "flex",
        alignItems:"center",
        margin:"10px"
        };
    const labelWidthStyle={
        width:"40%",
    };
    const feildWidthStyle={
        width:"50%",
    };
    //Animations
    const { ref: bodimSectionRef, inView: bodimSectionInView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });
    const { ref: addFeatureSectionRef, inView: addFeatureSectionInView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { ref: addPhotosSectionRef, inView: addPhotosSectionInView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { ref: addReviewSectionRef, inView: addReviewSectionInView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const sectionAnimationVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    useEffect(()=>
    {
        loadbodimTypes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //fetch types name from bodimtype table 
    const loadbodimTypes=()=>{
       fetchBodimTypes()
        .then(function (response) {
            setBodimTypes(response.data) 
        })
        .catch(function (error) {
            console.log(error);
        })    
    }
    //Form Submission
    const handleOnSubmit=(event)=>{
        event.preventDefault()
        console.log(BodimDetails)
        postBodimDetails(BodimDetails).then((response)=>{
            alert(response)
        }).catch((error)=>{
            alert(error)
        })
    }
    
    const bodimInitialState={
        price:0.00,
        capacity:0,
        distanceToUni:0,
        type:"",
        numChairs:0,
        numFans:0,
        numTables:0,
        numNets:0,
        kitchen:0,
        rating:0.00,
        locationAddress:"",
        nearestCity:"",
        bodimPlaceName:"",
        contact:[],
        review:[]
    }

    const initialErrorState={
        bodimPlaceNameError:false,
        bodimTypeError:false,
        priceError:false,
        contactError:false,
        distanceToUniError:false,
        locationAddressError:false,
        nearestCityError:false,
        capacityError:false,
        numChairsError:false,
        numFansError:false,
        numTablesError:false,
        numNetsError:false,
        kitchenError:false,
    }

    const [bodimTypes,setBodimTypes]=useState([])//fetch bodim types
    const [BodimDetails,setBodimDetails]=useState(bodimInitialState)//set bodim details
    let[BodimDetailsError,setBodimDetailsError]=useState(initialErrorState)//error handling
    const [locationType, setLocationType] = useState('nearestCity')  //Toggle between address and nearest city

    const handleChange=(e)=>{
        const {name ,value}=e.target
        if(name==="contact"){
            contactNumberValidation(value)
        }
        else if(name==="location"){
            setLocationType(value)
        }
        else{
            setBodimDetails({...BodimDetails,[name]:value}) 
        }

    }

    //Contact number validaion
    const contactNumberValidation=(value)=>{
        const phoneNumRegex=/^\d{10}$/;
        const isCurrentPhoneNumber=BodimDetails.contact.indexOf(value)
        setBodimDetailsError({...BodimDetailsError,contactError:true})
        if(isCurrentPhoneNumber!==-1 || !phoneNumRegex.test(value)){
            return 0;
        }
        if(value.length!==10){
            setBodimDetails({...BodimDetails, contact: []});
            return 0;
        }
        if(value.length===0){
            setBodimDetails({...BodimDetails, contact: []});
            return 0;
        }
        setBodimDetails({...BodimDetails, contact: [...BodimDetails.contact, value]});
        setBodimDetailsError({...BodimDetailsError,contactError:false})
    }
    //contact number show
    let[contacNumShow,setcontacNumShow]=useState(false);
    const contactNumbersShow=(e)=>{
        setBodimDetailsError({...BodimDetailsError,contactError:false})
        document.getElementById("contact").value="";
        let result=false;
        if(BodimDetails.contact.length===0){
            result=false;
        }
        else{
            result=contacNumShow===false? true : contacNumShow;
        }
        setcontacNumShow(result);
    }
    const deleteContactNumber = (e) => {
        const index=BodimDetails.contact.indexOf(e)
        document.getElementById("contact").value="";
        const updatedContact = [...BodimDetails.contact];
        updatedContact.splice(index, 1);
        setBodimDetails({ ...BodimDetails, contact: updatedContact });
    };

    //Available Fatures hooks
    const [allFeatures] = useState([
        { name: 'Beds', count: 0},
        { name: 'Chairs', count: 0 },
        { name: 'Tables', count: 0 },
        { name: 'Nets', count: 0},
      ]);
    
      const [availableFeatures, setAvailableFeatures] = useState([]);

      const addFeature = (feature) => {
        setAvailableFeatures([...availableFeatures, feature]);
      };
    
      const removeFeature = (index) => {
          const newFeatures = [...availableFeatures];
          newFeatures.splice(index, 1);
          setAvailableFeatures(newFeatures);
      };
  
      const updateFeatureCount = (index, count) => {
          const newFeatures = [...availableFeatures];
          newFeatures[index].count = count;
          setAvailableFeatures(newFeatures);
          setBodimDetails({...BodimDetails,["num"+newFeatures[index].name]:count});
      };
  

    //   Add photos hooks 
    const [images, setImages] = useState([]);
    const handleDrop = (e) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        const newImages = files
            .filter((file) => file.type === 'image/jpeg' || file.type === 'image/png')
            .map((file) => URL.createObjectURL(file));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };
    const handleDragOver = (e) => {
        e.preventDefault();
    };
    const handleFileSelect = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files
            .filter((file) => file.type === 'image/jpeg' || file.type === 'image/png')
            .map((file) => URL.createObjectURL(file));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };
    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    };

    //Add review
    const [reviewPopup,setReviewPopup]=useState(false)
    const [renderReview,setRenderReview]=useState(false)

    return (
          <Box component="form" autoComplete='off' onSubmit={handleOnSubmit}>
                {/*Appartment details component  */}
               <motion.div
                ref={bodimSectionRef}
                initial="hidden"
                animate={bodimSectionInView ? 'visible' : 'hidden'}
                variants={sectionAnimationVariants}
                transition={{ duration: 1 }}>
                <Container sx={sectionContainerStyle}>    
                    <Grid container spacing={2} >
                        <Grid item md={6} xs={12}>
                            <Box sx={boxStyle}>
                                <FormLabel sx={labelWidthStyle} htmlFor="bodimPlaceName">Enter appartment name</FormLabel>
                                <TextField maxLength={10} error={BodimDetailsError.bodimPlaceNameError} required onChange={handleChange} value={BodimDetails.bodimPlaceName} sx={feildWidthStyle} name="bodimPlaceName" id="bodimPlaceName" label="bodim Name" variant="outlined" size='small'/>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box sx={boxStyle}>
                            <FormLabel sx={labelWidthStyle}>Select boidm type</FormLabel>
                            <FormControl sx={{minWidth: "50%" }} size="small" minwidth="48rem">
                            <Select error={BodimDetailsError.bodimTypeError} required defaultValue={'none'}  name="bodimType" onChange={handleChange}>
                                <MenuItem value={'none'}><em>None</em></MenuItem>
                            {

                                bodimTypes.map((item)=>{
                                return <MenuItem key={item} value={item}>{item}</MenuItem>
                                })
                            }
                                
                            </Select>
                            </FormControl>
                            </Box>
                            
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid container spacing={2} >
                        <Grid item md={6} xs={12}>
                            <Box sx={boxStyle}>
                                <FormLabel sx={labelWidthStyle} htmlFor="price">Price</FormLabel>
                                <TextField 
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">Rs.</InputAdornment>,
                                  }}
                                type="number"
                                error={BodimDetailsError.priceError} 
                                required onChange={handleChange} 
                                value={BodimDetails.price} 
                                sx={feildWidthStyle} name="price" id="price" label="Price" variant="outlined" size='small'/>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box sx={boxStyle}>
                                <FormLabel sx={labelWidthStyle} htmlFor='contact'>Contact details</FormLabel>
                                <TextField 
                                className="ContactInput"
                                type="number" 
                                error={BodimDetailsError.contactError} 
                                onChange={handleChange} required 
                                sx={{width:'35%', marginRight:'2%'}} 
                                name="contact" id="contact" label="contact" variant="outlined" size='small'/>
                                <Button onClick={contactNumbersShow} size="small" variant="text" startIcon={<AddIcCallIcon />}>
                                Add another 
                                </Button>
                            </Box>
                            <Box sx={{textAlign:'right',marginRight:'5%'}}>
                            {
                                contacNumShow && BodimDetails.contact.map((item)=>
                                <Paper elevation={3} key={item}
                                sx={{
                                    display: 'inline',
                                    width:"25%",
                                    backgroundColor:"#9EC9F7",
                                    borderRadius:'18px',
                                    color:"blue",
                                    fontStyle:"bold",
                                    padding:"0.3rem",
                                    boxShadow:3,
                                    margin:"0.3rem"
                                }}>
                                <Typography sx={{px:1}} variant="caption">{item}</Typography>
                                <IconButton onClick={()=>{deleteContactNumber(item)}} aria-label="delete" padding="0px"><DeleteIcon /></IconButton>
                                </Paper>
                                )
                            }
                            </Box>                
                        
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} >
                        <Grid item md={6} xs={12}>
                            <Box sx={boxStyle}>
                                <FormLabel sx={labelWidthStyle} htmlFor='distance'>Distance to Uni</FormLabel>
                                <TextField 
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">km</InputAdornment>,
                                  }}
                                type="number" 
                                error={BodimDetailsError.distanceToUniError} 
                                onChange={handleChange} sx={feildWidthStyle} 
                                name="distanceToUni" 
                                id="distance" label="Distance" variant="outlined" size='small' />
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box>
                            <FormControl fullWidth sx={{margin:'10px'}}>
                                <FormLabel id="location-group">Location Details:</FormLabel>
                                <RadioGroup defaultValue="nearestCity" name="location">
                                    <Box sx={boxStyle}>
                                        <FormControlLabel sx={labelWidthStyle}
                                            style={{marginRight:'0'}}
                                            value="nearestCity" 
                                            control={<Radio />} 
                                            label="Nearest City" 
                                            onChange={handleChange}
                                        
                                        />
                                        <TextField  
                                        disabled={locationType!=="nearestCity"} 
                                        onChange={handleChange}
                                        name="nearestCity" 
                                        id="nearestCity" 
                                        label="City" variant="outlined" size='small'/>
                                    </Box>
                                    <Box sx={{margin:'10px'}} >
                                        <FormControlLabel sx={labelWidthStyle}
                                            style={{marginRight:'0'}}
                                            value="locationAddress" 
                                            control={<Radio />} 
                                            label="Address" 
                                            onChange={handleChange}
                                        />
                                        <TextField 
                                        disabled={locationType!=="locationAddress"} 
                                        onChange={handleChange} 
                                        name="locationAddress" 
                                        id="locationAddress" multiline rows={4} 
                                        defaultValue="No,Street name,City"
                                        />
                                    </Box>
                                </RadioGroup>
                            </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                </motion.div>
              
                {/* Availabale features*/}
                <motion.div
                ref={addFeatureSectionRef}
                initial="hidden"
                animate={addFeatureSectionInView ? 'visible' : 'hidden'}
                variants={sectionAnimationVariants}
                transition={{ duration: 1 }}>
                <Container sx={sectionContainerStyle}>
                    <Grid container spacing={4} justifyContent="space-between">
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography className='roboto-medium' fontSize={'1.7rem'} gutterBottom sx={sectionTtileStyle}>Available Features</Typography>
                                {availableFeatures.map((feature, index) => (
                                    <Box key={index} display="flex" alignItems="center" mb={2}>
                                        <Typography sx={{ml: 1,width:'20%'}} variant="body1">{feature.name}</Typography>
                                        <TextField
                                            type="number"
                                            value={feature.count}
                                            onChange={(e) => {
                                                let count=0;
                                                count=isNaN(e.target.value) ? 0:parseInt(e.target.value);
                                                updateFeatureCount(index, count)}}
                                            sx={{ ml: 1, mr: 1 }}
                                            size="small"
                                        />
                                        <Button variant="contained" color="secondary" onClick={() => {
                                                updateFeatureCount(index, parseInt(0))
                                                removeFeature(index)}}>
                                            Remove
                                        </Button>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography className='roboto-medium' fontSize={'1.7rem'} gutterBottom sx={sectionTtileStyle}>All Features</Typography>
                                {allFeatures.map((feature, index) => (
                                    <Box key={index} display="flex" alignItems="center" mb={2}>
                                        <Typography sx={{ml: 1,width:'20%'}}variant="body1">{feature.name}</Typography>
                                        <Button variant="contained" color="primary" onClick={() => {addFeature(feature)}} sx={{ ml: 1 ,width:'30%'}}>
                                            Add
                                        </Button>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                </motion.div>
               
                {/* Add photos*/}
                <motion.div
                ref={addPhotosSectionRef}
                initial="hidden"
                animate={addPhotosSectionInView ? 'visible' : 'hidden'}
                variants={sectionAnimationVariants}
                transition={{ duration: 1 }}>
                <Container sx={sectionContainerStyle}>
                    <Typography className='roboto-medium' fontSize={'1.7rem'} gutterBottom sx={sectionTtileStyle}>
                        Upload photos
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box
                                sx={{
                                    border: '2px dashed #ccc',
                                    borderRadius: '8px',
                                    height: '200px',
                                    width: '100%',
                                    maxWidth: '300px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#f9f9f9',
                                    position: 'relative',
                                    mx: 'auto',
                                }}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                            >
                                <input
                                    id="fileInput"
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    onChange={handleFileSelect}
                                />
                                <Button
                                    variant="contained"
                                    startIcon={<CloudUploadIcon />}
                                    onClick={handleButtonClick}
                                >
                                    Upload Image
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Grid container spacing={2}>
                                {images.length > 0 ? (
                                    images.map((image, index) => (
                                        <Grid item key={index}>
                                            <Paper elevation={3}>
                                                <img
                                                    src={image}
                                                    alt={`Uploaded ${index}`}
                                                    style={{
                                                        width: '258px',
                                                        height: '128px',
                                                        objectFit: 'contain',
                                                        borderRadius: '8px',
                                                    }}
                                                />
                                            </Paper>
                                        </Grid>
                                    ))
                                ) : (
                                    <Grid item xs={12}>
                                        <Paper elevation={3} sx={{ padding: '16px', textAlign: 'center' }}>
                                            {/* Remove the icon and text */}
                                        </Paper>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                </motion.div>
               
                {/* Add reviews*/}
                <motion.div
                ref={addReviewSectionRef}
                initial="hidden"
                animate={addReviewSectionInView ? 'visible' : 'hidden'}
                variants={sectionAnimationVariants}
                transition={{ duration: 1 }}>
                <Container sx={sectionContainerStyle}>
                    <Grid container>
                        <Grid item xs={11}>
                            <Typography className='roboto-medium' fontSize={'1.7rem'} sx={sectionTtileStyle}>Add first feedback by you</Typography>
                                
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="contained" onClick={()=>setReviewPopup(true)} endIcon={<FeedbackIcon />}>
                                Add
                            </Button>
                        </Grid>
                        <Popups 
                            trigger={reviewPopup} 
                            buttonTitle="Add review" 
                            setCloseButton={setReviewPopup} 
                            setSubmitButton={setRenderReview}>
                           <ReviewAddingForm boxStyle={boxStyle} labelWidthStyle={labelWidthStyle} feildWidthStyle={feildWidthStyle}/>                        
                        </Popups>
                        <Grid item>
                            {renderReview && <ReviewCardComponent/>}
                        </Grid>

                    </Grid>
                </Container>
                </motion.div>

                <Container sx={{textAlign:'right',py:'5px'}}>
                    <Button sx={{m:2}} variant='contained' type="submit">Submit</Button>
                    <Button variant='contained' type="reset">Rest</Button>
                </Container>
            {/* <Container>
            {Object.keys(BodimDetails).map((keyName, i) => (
                <li key={i}>
                    <span>{keyName}: {BodimDetails[keyName]}</span>
                </li>
            ))}
            </Container> */}
          </Box>
         
    )
}

export default AddBodim;
