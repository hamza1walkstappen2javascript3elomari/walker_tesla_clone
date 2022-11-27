import React from "react";
import Home from "./Home.jsx";
import Feature from "./Feature.jsx";
import State, { useState } from "react";
import HeaderStyling from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ClearIcon from "@mui/icons-material/Clear";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Header(props) {
  const [showning, setShowimg] = useState(false);
  const [fet, setf] = useState(true);
  return (
    <Continer>
      <Logo>
        <a href="#">
          <img src="/imgs/logo.svg" />
        </a>
      </Logo>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <ItemText>
          <a href="#">
            <span>
              <ShoppingBasketIcon />
            </span>
          </a>
          <h4>Shop</h4>
        </ItemText>
        <Wrap>
          <a href="#">
            <span>
              <AccountCircleIcon />
            </span>
          </a>
          <h4>Accont</h4>
        </Wrap>
        <Button>
          <MenuIcon onClick={() => setShowimg(true)} />
        </Button>
      </RightMenu>
      <SideBar show={showning}>
        <CenteringClear>
          <ClearIcon onClick={() => setShowimg(false)} />
        </CenteringClear>
        <li>
          <a href="/Fatr">Special</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Fatr">Cyber Truck</a>
        </li>
        <li>
          <a href="/">Red Tesla</a>
        </li>
        <li>
          <a href="/">Verstappen Tesla</a>
        </li>
        <li>
          <a href="/">Cheko Truck</a>
        </li>
        <li>
          <a href="/">Horner Guide</a>
        </li>
        <li>
          <a href="/">Enventory</a>
        </li>
        <li>
          <a href="/">Travlling</a>
        </li>
        <li>
          <a href="/">Connecting</a>
        </li>
        <li>
          <a href="/">Speed</a>
        </li>
      </SideBar>
    </Continer>
  );
}
export default Header;
const Continer = HeaderStyling.div`
position:fixed;
height:10vh;
// top:0;
// left:0;
// right:0
width:100%;
display:flex;
justify-content:space-between;
z-index=1;
`;

const Menu = HeaderStyling.div`
width:50%;
display:flex;
justify-content:space-evenly;
align-items:center;
@media(max-width:670px){
  display:none
}
`;
const RightMenu = HeaderStyling.div`
width:30%;
display:flex;
justify-content:space-evenly;
// background-color:red;
margin-top:-10px;
@media(max-width:670px){
  width:50%;
}
 
`;
const ItemText = HeaderStyling.div`
display:flex;
align-items:center;
// background:green;
width:30%;

padding-top:10px;

`;
const Wrap = HeaderStyling.div`
display:flex;
align-items:center;
width:30%;
padding-top:10px;
`;
const Button = HeaderStyling.div`
display:flex;
align-items:center;
margin-top:9.5px;
padding-top:3px
margin-left:100px
width:30%;
margin-right:-20px;
`;
const Logo = HeaderStyling.div`
color:white;
display:flex;
align-items:center;
padding-left:15px
`;
const SideBar = HeaderStyling.div`
z-index:150;
background:white;
width:30%;
position:fixed;
top:0;
right:0;
bottom:0;
li{
  width:100%;
  // background:red;
  height:7.5%;
  padding-left:10px;
  margin:10px 10px;
  border-bottom:solid 1px;
 
};
list-style:none;
transform:${(props) => (props.show ? "translateX(100)" : "translateX(100%)")};
transition:0.5s;
 

`;
const CenteringClear = HeaderStyling.div`
display:flex;
justify-content:flex-end;
`;
const Details = HeaderStyling.div`
background:red;
position:absolute;
left:0;
right:0;
height:100vh;
z-index=10;
`;
const Presenting = HeaderStyling.div`
background:green;
 
left:0;
right:0;
height:100vh;
z-index=10;`;
