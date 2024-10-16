import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import  UserPage  from "./screens/homePage/userPage";
import  ProductsPage  from "./screens/homePage/productsPage";
import  OrdersPage  from "./screens/homePage/ordersPage";
import  HomePage  from "./screens/homePage/homePage";
import  HomeNavbar  from "./components/headers/HomeNavbar";
import  OtherNavbar  from "./components/headers/OtherNavbar";
import  Footer  from "./components/footer";
import "../css/app.css";
import "../css/navbar.css"
import "../css/footer.css"
import  HelpPage  from "./screens/homePage/helpPage";

function App() {

  const location = useLocation ();
  console.log("location", location)
  return (
    <>
      {location.pathname === "/" ? <HomeNavbar/> : <OtherNavbar/>}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
