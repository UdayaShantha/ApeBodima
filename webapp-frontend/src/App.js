import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./mainLayout/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AddBodim from "./pages/AddBodim";
import SearchAlertComponent from "./component/SearchingAlertComponent";
import FilterBar from "./component/FilterBarComponent";
import Explore from "./pages/Explore";
import UserManagement from "./pages/UserManagement";
import BoardimCard from "./component/BoardimCard";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><SearchAlertComponent/><Home /></div>} />
          <Route path="/addBodim" element={<div><SearchAlertComponent/><AddBodim /></div>} />
          <Route path="/a" element={<AboutUs />} />
          <Route path="/filter" element={<FilterBar />} />
          <Route path="/explore" element={<><Explore /></>} />
          <Route path="/userAccount" element={<UserManagement/>}/>
          <Route path="/component" element={<BoardimCard/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
