import { Button, Grid, IconButton,Typography } from "@mui/material";
import React, { useState } from "react";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import GradeIcon from "@mui/icons-material/Grade";
import Rating from "./Rating";
const BoardimCard = ({ image, name, price, description, rating }) => {
  const [faviorite, setFaviorite] = useState(false);
  const checkfaviorite = () => {
    if (faviorite === true) {
      setFaviorite(false);
    } else {
      setFaviorite(true);
    }
  };
  return (
    <Grid
      sx={{
        width: "404px",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      <Grid
        item
        sx={{
          alignSelf: "center",
        }}
      >
        <img
          src={image}
          alt="boardimImage"
          style={{
            width: "300px",
            height: "250px",
          }}
        />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "flex-end", // Aligns Rating to the right
          textAlign: "right",
          marginRight: "10px", // Optional margin for spacing
        }}
      >
         <Rating rate={rating}/>
      </Grid>

      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop:"10px"
        }}
      >
        <Typography
          sx={{
            marginLeft: "10px",
            fontSize: "14px",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            marginRight: "10px",
            fontSize: "14px",
          }}
        >
          <span>Rs </span>{price}
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          position: "left",
        }}
      >
        <Typography
          sx={{
            marginLeft: "20px",
          }}
        >
          {description}
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <IconButton onClick={() => checkfaviorite()} sx={{}}>
          {faviorite ? <GradeIcon /> : <StarOutlineIcon />}
          <Typography>add faviorite</Typography>
        </IconButton>

        <div>
          <Button
            sx={{
              background: "white",
              textDecoration: "none",
            }}
          >
            <FindInPageIcon />
            More Details
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default BoardimCard;
