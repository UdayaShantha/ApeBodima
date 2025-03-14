import React, { useEffect, useState } from "react";
import FilterBarComponent from "../component/FilterBarComponent";
import { Button, Container, Grid } from "@mui/material";
import BoardimCard from "../component/BoardimCard";
import Stack from "@mui/material/Stack";
import bodimimage from '../component/images/BoardimCard.png';
import axios from 'axios';

const Explore = () => {
  const [page,setPage]=useState(0);
  const [data,setData]=useState([]);
  const [next,setNext]=useState(false);
  const [prev,setPrev]=useState(true);
  useEffect(()=>{
    const getAll = async () => {
      console.log("test working");

      try {
        // Construct the request URL

        const response = await axios.get(
          `http://localhost:8090/api/v1/bodimeDetails/get-all?page=${page}&size=${12}`
        );
  
        // Display the response data in the console
        console.log('Response Data:', response.data);
        setData(response.data);
      } catch (error) {

        console.error('Error fetching data:', error);
      }
    };
    getAll();
  },[page])
  const changeTONext=()=>{
    if(data.length!==0){
      setPage(prev=>prev+1);
      setPrev(false);
      setNext(true);
    }
    else{
      setNext(false);
      setPrev(false);
    }
     
  }
  const changeToPrev=()=>{
    if(page>0){
      setPage(prev=>prev-1);
      setPrev(true);
      setNext(false);
    }
    else{
      setPrev(false);
    }
  }
  return (
    <Container maxWidth={"xl"}
    sx={{
      marginBottom:"10px"
    }}
    >
      <FilterBarComponent pageVal={page} getData={setData}/>
      <Grid
        sx={{
          height: "auto",
          display: "grid",

          gridTemplateColumns: {
            xs: "repeat(1,1fr)",
            md: "repeat (2,1fr)",
            sm: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          },
          gridTemplateRows: "auto",
          gap: "20px",
          justifyItems:"center"
        }}
      >
        {data.map((item,index) => (
               <BoardimCard key = {index} image={bodimimage} name={item.bodimPlaceName} price={item.price} description={item.type} rating={item.rating}/> 
          ))}
      </Grid>
      <Stack direction="row" spacing={2}
        sx={{
          justifyContent:"space-between"
        }}
      >
        <Button variant="outlined" 
        disabled={prev}
          onClick={()=>{
              changeToPrev();
          }}
        >Previous
        
        </Button>
       
        <Button variant="outlined" href="#outlined-buttons"
         disabled={next}
        onClick={()=>{
          changeTONext();
        }}
        >
          Next
        </Button>
      </Stack>
    </Container>
  );
};

export default Explore;
