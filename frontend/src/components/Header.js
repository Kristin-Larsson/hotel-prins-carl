import React from 'react';
import Logo from '../images/prinscarl_logo.png'
import Phone from '../icons/phone.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
    <>
    <NavMenu>
    <a href="/"><Image src={Logo} alt="Prins Carl Logo"/></a>
    <a href="/contact"><ContactButton>Contact us</ContactButton></a>
    <input type="checkbox" id="checkbox_toggle" />
    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
    <div className="menu">
      <div className="linkwrapper">
      <a href="/book">Book a room</a>
      <a href="/contact">Contact</a>
      <a href="#">Events</a>
      <a href="/guestbook">Guestbook</a>
      <a href="#">About us</a>
      </div>
    </div>
    <Call><PhoneIcon src={Phone} alt="Prins Carl Logo"/>040-040404</Call>
    </NavMenu>
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
@media (min-width: 668px) {
display: unset;
background-color: white;
margin-right: 20px;
border: none;
font-family: 'PT Sans', sans-serif;
font-size: 18px;
}
`

const Image = styled.img`
height: 47px;
padding-top: 5px;
@media (min-width: 668px) {
height: 80px;
}
`

const PhoneIcon = styled.img`
display: none;
height: 20px;
margin-left: 10px;
padding-top: 5px;
@media (min-width: 668px) {
display: unset;
height: 45px;
}
`

const NavMenu = styled.nav`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    height: 55px;
    background-color:white;

//DESKTOP
    @media (min-width: 668px) {
    background-color: white;
    width: 100%;
    height: 95px;
    }

    .linkwrapper {
      @media (min-width: 668px){
      display:flex;
      margin-bottom: 10px;
      width: 550px;
      justify-content: space-between;
      }
    }

    a {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    text-decoration: none;
    color: black;
    &:hover {
    }
    @media (min-width: 668px) {
    font-family: 'PT Sans', sans-serif;
    text-transform: uppercase;
    font-size: 18px;
    &:hover {
    font-family: 'Playfair Display', serif;
    font-size: 19px;
    }
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
    text-align:center;
    margin-top: 40px;
    margin-left: 0px;
    
    &:hover {
    display: inline-block;
    height: 40px;
    position: absolut;
    color: white;
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