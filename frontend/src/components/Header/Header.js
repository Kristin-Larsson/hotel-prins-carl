import React from 'react';
import Logo from 'images/prinscarl_logo.png'
import Phone from 'icons/phone.png'
import styled from 'styled-components'

const Header = () => {

    return (
    <>
    <NavMenu>
    <a href="/"><Image src={Logo} alt="Prins Carl Logo"/></a>
    <a href="/info"><ContactButton>Contact us</ContactButton></a>
    <input type="checkbox" id="checkbox_toggle" />
    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
    <div className="menu">
      <div className="linkwrapper">
      <a href="/book">Book a room |</a>
      <a href="/info">Contact & information |</a>
      <a href="/breakfast">Breakfast |</a>
      <a href="/Events">Events |</a>
      <a href="/aboutus">About us |</a>
      <a href="/guestbook">Guestbook |</a>
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
    @media (min-width: 1020px) {
    display: none;
    }
`
const Call = styled.button`
display: none;
@media (min-width: 1020px) {
display: unset;
display: flex;
align-items: flex-end;
height: 70px;
width: 190px;
padding-bottom: 10px;
background-color: white;
margin-right: 40px;
border: none;
font-family: 'PT Sans', sans-serif;
font-size: 20px;
&:hover {
    font-family: 'Playfair Display', serif;
    font-size: 21px;
    }
}
`

const Image = styled.img`
    display: block;
    align-items: center;
    position: absolute;
    height: 50px;
    top: 10px;
    left: 13px;
    border: none;
    color: white;
    font-family: 'Playfair Display', serif;
    &:hover {
    cursor: pointer;
    }
    @media (min-width: 1020px) {
    
    }
`

const PhoneIcon = styled.img`
display: none;
height: 20px;
margin-left: 10px;
padding-top: 5px;
@media (min-width: 1020px) {
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

//DESKTOP
    @media (min-width: 1020px) {
    background-color: white;
    width: 100%;
    height: 95px;
    }

    .linkwrapper {
      @media (min-width: 1020px){
      padding-bottom: 20px;
      display:flex;
      width: 900px;
      height: 40px;
      justify-content: space-between;
      }
    }

    a {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    text-decoration: none;
    color: black;

    @media (min-width: 1020px) {
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
  @media (max-width: 1020px) {
  .menu {
  display: none;
  background-color: white;
  
    a{
    height: 30px;
    text-transform: uppercase;
    display: block;
    margin-bottom: 10px;
    align-item: center;
    text-align:center;
    margin-top: 40px;
    margin-left: 0px;
    
    &:hover {
    height: 40px;
    position: absolut;
    color: grey;
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