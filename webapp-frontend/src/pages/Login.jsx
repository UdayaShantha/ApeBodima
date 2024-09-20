import {
  //Box,
  TextField,
  Typography,
  Button,
  Grid,
  Container,
  Link
} from "@mui/material";

import {  useState } from "react";
import ApeBODIMA from "../component/images/APEBODIMA.svg";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CloseIcon from '@mui/icons-material/Close';

const Login = ({closeLogDialog ,logStatus,registerStatus}) => {
  
  const [firstPassShow, setFirstPassShow] = useState(false);

  
 
    const closeLoginPage=()=>{
      closeLogDialog=false;

      logStatus(false);
      
  }
  

  return (
    <Container
    maxWidth={"md"}

    sx={{
      position:"relative",
      bgcolor: "#EBEFFF",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:"10px",
      marginBottom:"10px",
      flexDirection:"column",
    }}
    >
       <IconButton
        sx={
          {
            position:"absolute",
            right:{
              xs:"10px",
              md:"10px",
              sm:"10px",
              lg:"10px"
            },
            top:{
              xs:"10px",
              md:"10px",
              sm:"10px",
              lg:"10px"
            },
            '&:hover': {
          color: 'red',
        }

          }
        }
        onClick={()=>{
          closeLoginPage();
        }}
      >
        <CloseIcon/>
      </IconButton>
      
      <Grid
        container
        className="container"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "auto",
          padding: "10px"
          
        }}
      >
       
      
        <Grid
          item
          xs={12}
          md={5}
          sm={6}
          className="imageSide"
          sx={{
            bgcolor: "#EBEFFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height:"100%"
          }}
        >
          <img
            src={ApeBODIMA}
            alt="sideimages"
            style={{ marginTop: "100px", maxWidth: "100%", height: "auto" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          className="signupSide"
          sx={{
            bgcolor: "white",
            marginTop: "77px",
            marginBottom: "78px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height:"100%",
            position:"relative"
          }}
          component="form"
        >
          <Typography
            sx={{ color: "#1A1A1A", fontSize: "16px", fontWeight: "600" }}
          >
            Login to your account
          </Typography>
          
          <div style={{ marginTop: "30px", width: "100%" }}>
            <Typography>Email-Address:</Typography>
            <TextField
              className="custom-textfield"
              type="input"
              fullWidth
              variant="outlined"
              size="small"
            />
          </div>
          

           <div style={{ marginTop: "30px", width: "100%" }}>
            <Typography>Password:</Typography>
            <TextField
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        setFirstPassShow(!firstPassShow);
                      }}
                    >
                      {firstPassShow ? (
                        <VisibilityOutlinedIcon />
                      ) : (
                        <VisibilityOffOutlinedIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              className="custom-textfield"
              type={firstPassShow ? "text" : "password"}
              fullWidth
              variant="outlined"
              size="small"
             
            />
            <Link
              href="#forgot"
              sx={{
                position: "absolute",
                right: "30px",
                top: "179px",
                transform: "translateY(-50%)",
                fontSize: "12px",
                color: "#007BFF",
              }}
            >
              Forgot?
            </Link>
             
          </div>
          
          <div style={{ marginTop: "45px", width: "100%" }}>
            <Button sx={{ bgcolor: "#9EC9F7", width: "100%" }}>Login Now</Button>
          </div>
          <div className="register">
            <Typography
              sx={{ justifyContent: "space-between", marginTop: "10px" }}
              className="loggintext"
            >
              <span>Don't have an account?</span>
              <a
                style={{
                  cursor: "pointer",
                  marginLeft: "4px",
                  color: "blue",
                  textDecoration: "none",
                }}
                href="#login"
                onClick={()=>{
                    logStatus(false);
                    registerStatus(true);
                }}
              >
                Register
              </a>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;






