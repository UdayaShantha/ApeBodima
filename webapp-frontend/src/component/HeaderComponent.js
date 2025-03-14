import "./css/Header.css";
import ApeBODIMA from "./images/APEBODIMA.svg";
import { useEffect, useState, useRef } from "react";
import { Button, Grid, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import Register from "../pages/Register";
import Modal from "@mui/material/Modal";
import Login from "../pages/Login";
import { HashLink } from "react-router-hash-link";

const HeaderComponent = () => {
  const [sideBar, setSideBar] = useState(false);
  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);
  const linkRef3 = useRef(null);
  const linkRef4 = useRef(null);
  const linkRef0 = useRef(null);
  const [regStatus, setRegStatus] = useState(false);
  const [logStatus, setLogStatus] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 730) {
        setSideBar(false); // Close sidebar on large screens
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (linkRef) => {
    if (linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <div>
      <header className="header">
        <div className="logodiv">
          <IconButton onClick={() => handleClick(linkRef0)}>
            <img
              src={ApeBODIMA}
              alt="logo"
              style={{
                width: "40px",
                height: "40px",
                cursor: "pointer",
              }}
            />
          </IconButton>

          <HashLink ref={linkRef0} smooth to="/#headerSection"></HashLink>
        </div>
        <Button variant="text" onClick={() => handleClick(linkRef1)}>
          Explore
        </Button>
        <HashLink ref={linkRef1} smooth to="/explore#headerSection"></HashLink>
        <Button variant="text" onClick={() => handleClick(linkRef2)}>
          Add Place
        </Button>
        <HashLink ref={linkRef2} smooth to="/addBodim#headerSection"></HashLink>
        <Button variant="text" onClick={() => handleClick(linkRef3)}>
          User Account
        </Button>
        <HashLink ref={linkRef3} smooth to="/userAccount#headerSection"></HashLink>
        <Button variant="text" onClick={() => handleClick(linkRef4)}>
          View Favorite
        </Button>
        <HashLink ref={linkRef4} smooth to="/viewfavorite#headerSection"></HashLink>

        <Button
          variant="outlined"
          className="logout"
          onClick={() => setLogStatus(true)}
        >
          Log in
        </Button>

        <Button
          variant="outlined"
          className="signin"
          onClick={() => setRegStatus(true)}
        >
          Sign in
        </Button>

        <MenuIcon
          className="menubar"
          onClick={() => setSideBar(true)}
        />
      </header>

      {/* Responsive Sidebar */}
      <div
        className="container2"
        style={{
          right: `${sideBar ? "0px" : "-2000px"}`,
          transition: "right 0.3s ease-in-out",
        }}
      >
        <IconButton onClick={() => setSideBar(false)}>
          <CloseRoundedIcon />
        </IconButton>
        <Grid container className="navbar2" direction={"column"}>
          <Button variant="text" onClick={() => handleClick(linkRef1)}>
            Explore
          </Button>
          <Button variant="text" onClick={() => handleClick(linkRef2)}>
            Add Place
          </Button>
          <Button variant="text" onClick={() => handleClick(linkRef3)}>
            User Account
          </Button>
          <Button variant="text" onClick={() => handleClick(linkRef4)}>
            View Favorite
          </Button>
          <Button
            variant="outlined"
            className="logout"
            onClick={() => setLogStatus(true)}
          >
            Log in
          </Button>
          <Button
            variant="outlined"
            className="signin"
            onClick={() => setRegStatus(true)}
          >
            Sign in
          </Button>
        </Grid>
      </div>

      {/* Login Modal */}
      <Modal
        open={logStatus}
        onClose={() => setLogStatus(false)}
        disableScrollLock
        sx={{ overflowY: "auto", height: "100%" }}
      >
        <div>
          <Login logStatus={setLogStatus} registerStatus={setRegStatus}/>
        </div>
      </Modal>

      {/* Register Modal */}
      <Modal
        open={regStatus}
        onClose={() => setRegStatus(false)}
        disableScrollLock
        sx={{ overflowY: "auto", height: "100%" }}
      >
        <div>
          <Register registerStatus={setRegStatus} logStatus={setLogStatus}/>
        </div>
      </Modal>
    </div>
  );
};

export default HeaderComponent;
