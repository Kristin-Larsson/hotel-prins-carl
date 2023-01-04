import React from 'react';
import Logo from '../images/prinscarl_logo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
    <>
    <NavMenu>
    <Image src={Logo} alt="Prins Carl Logo"/>
    <ContactButton>Contact us</ContactButton>
    <input type="checkbox" id="checkbox_toggle" />
    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
    <div className="menu">
      <a href="#">Prins Carl</a>
      <a href="#">Events</a>
      <a href="#">Info</a>
      <a href="/guestbook">Guestbook</a>
      <a href="/Summary">Book</a>
    </div>
    </NavMenu>
    <Call>040-040404</Call>
    </>
    )
}

export default Header;

const ContactButton = styled.button`
    display: block;
    align-items: center;
    position: absolute;
    background-color:#646f85;
    top: 18px;
    right:55px;
    border: none;
    color: white;
    font-size: 18px;
    font-family: 'Playfair Display', serif;
    &:hover {
    cursor: pointer;
    }
    @media (min-width: 668px) {
    display: none;
    }
`
const Call = styled.button`
    display: none;
    }
    @media (min-width: 668px) {
    display: block;
    align-items: center;
    position: absolute;
    background-color:#646f85;
    top: 22px;
    right:55px;
    border: none;
    color: white;
    font-size: 18px;
    font-family: 'Playfair Display', serif;
    &:hover {
    cursor: pointer;
    }
`

const Image = styled.img`
height: 50px;
margin-left: 10px;
@media (min-width: 668px) {
height: 70px;
border: 2px solid red;
}
`

const NavMenu = styled.nav`
//DESKTOP
    background-color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    background-color:white;
    @media (min-width: 668px) {
    background-color: white;
    width: 100%;
    }

    a {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    text-decoration: none;
    color: black;
    margin-left: 20px;
    &:hover {
    background-color: #646f85;
    color: white;
    }
    
  }

// MOBIL
// HAMBURGER ICON
.hamburger {
  margin-right: 15px;
  display: none;
  font-size: 28px;
  user-select: none;
  }
  input[type=checkbox] {
  display: none;
  }
@media (max-width: 668px) {
  .menu {
  display: none;
  background-color: white;
  
    a{
    text-transform: uppercase;
    display: block;
    margin-bottom: 10px;
    align-item: center;
    margin-left: 40%;
    margin-top: 30px;
    
    &:hover {
    display: inline-block;
    width: 100px;
    height: 40px;
    position: relative;
    color: hotpink;
    background-color: none;
  
  }
  }

  }
  //POSITION OF ICON
 .hamburger {
  display: block;
  position: absolute;
  top: 10px;
  right:0px;
  }

  //STYLING OF OPEN MENU
  input[type=checkbox]:checked ~ .menu{
  display: block;
  position: absolute;
  z-index:2;
  top: 50px;
  height: 100vh;
  width:100%;
  flex-direction: column;
  }
}
`