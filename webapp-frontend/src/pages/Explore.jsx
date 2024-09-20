import React from "react";
import FilterBarComponent from "../component/FilterBarComponent";
import { Button, Container, Grid } from "@mui/material";
import BoardimCard from "../component/BoardimCard";
import Stack from "@mui/material/Stack";
const Explore = () => {
  return (
    <Container maxWidth={"xl"}
    sx={{
      marginBottom:"10px"
    }}
    >
      <FilterBarComponent />
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
        <BoardimCard
          image={
            "https://tse3.mm.bing.net/th?id=OIP.qE3ylW-qR2cxqgVil4y3RQHaJ3&pid=Api&P=0&h=220"
          }
        />
        <BoardimCard
          image={
            "https://tse3.mm.bing.net/th?id=OIP.qE3ylW-qR2cxqgVil4y3RQHaJ3&pid=Api&P=0&h=220"
          }
        />
        <BoardimCard
          image={
            "https://tse3.mm.bing.net/th?id=OIP.qE3ylW-qR2cxqgVil4y3RQHaJ3&pid=Api&P=0&h=220"
          }
        />
        <BoardimCard
          image={
            "https://tse3.mm.bing.net/th?id=OIP.qE3ylW-qR2cxqgVil4y3RQHaJ3&pid=Api&P=0&h=220"
          }
        />
        <BoardimCard
          image={
            "https://tse3.mm.bing.net/th?id=OIP.qE3ylW-qR2cxqgVil4y3RQHaJ3&pid=Api&P=0&h=220"
          }
        />
      </Grid>
      <Stack direction="row" spacing={2}
        sx={{
          justifyContent:"space-between"
        }}
      >
        <Button variant="outlined" disabled>Previous
        
        </Button>
       
        <Button variant="outlined" href="#outlined-buttons"
        >
          Next
        </Button>
      </Stack>
    </Container>
  );
};

export default Explore;
