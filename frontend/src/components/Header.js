import React from 'react';
import Logo from '../images/prinscarl_logo.png'
import styled from 'styled-components'

const Header = () => {

    return (
    <Wrapper>
    <NavMenu>
    <Image src={Logo} alt="Prins Carl Logo" />
    <ContactButton>Contact us</ContactButton>
    <input type="checkbox" id="checkbox_toggle" />
    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
    <div className="menu">
      <a href="#">Book</a>
      <a href="#">Events</a>
      <a href="#">info</a>
      <a href="/Summary">Book</a>
    </div>
    </NavMenu>
    <Call>040-040404</Call>
    </Wrapper>
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
    position: absolute;
    background-color:#646f85;
    right:15%;
    border: none;
    color: white;
    font-size: 18px;
    font-family: 'Playfair Display', serif;
    &:hover {
    cursor: pointer;
    }
`

const Wrapper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    @media (min-width: 668px) {
    width: 80%;
    margin-left:10%;
    height: 80px;
    }
`

const Image = styled.img`
height: 50px;
margin-left: 10px;
@media (min-width: 668px) {
height: 70px;
margin-left:50px;
}
`

const NavMenu = styled.nav`
//DESKTOP
    width: 100%;

    a {
    font-family: 'Playfair Display', serif;
    font-size: 25px;
    margin-left: 20px;
    text-decoration: none;
    color: black;
    &:hover {
    background-color: #646f85;
    color: white;
    }
  }

//MOBIL
// Hamburger icon
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
  top: 60px;
  height: 100vh;
  width:100%;
  flex-direction: column;
  }
}
`